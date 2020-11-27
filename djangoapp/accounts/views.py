from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import json

# Create your views here.

from .models import *
from .forms import OrderForm

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *

def home(request):
	orders = Order.objects.all()
	customers = Customer.objects.all()

	total_customers = customers.count()

	total_orders = orders.count()
	delivered = orders.filter(status='Delivered').count()
	pending = orders.filter(status='Pending').count()

	context = {'orders':orders, 'customers':customers,
	'total_orders':total_orders,'delivered':delivered,
	'pending':pending }

	return render(request, 'accounts/dashboard.html', context)

def products(request):
	products = Product.objects.all()

	return render(request, 'accounts/products.html', {'products':products})

def customer(request, pk_test):
	customer = Customer.objects.get(id=pk_test)

	orders = customer.order_set.all()
	order_count = orders.count()

	context = {'customer':customer, 'orders':orders, 'order_count':order_count}
	return render(request, 'accounts/customer.html',context)

def createOrder(request):
	form = OrderForm()
    # by default, it's a GET request
	if request.method == 'POST':
		form = OrderForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('/')

	context = {'form':form}
	return render(request, 'accounts/order_form.html', context)

def updateOrder(request, pk):

	order = Order.objects.get(id=pk)
	form = OrderForm(instance=order)

	if request.method == 'POST':
		form = OrderForm(request.POST, instance=order)
		if form.is_valid():
			form.save()
			return redirect('/')

	context = {'form':form}
	return render(request, 'accounts/order_form.html', context)

def deleteOrder(request, pk):
	order = Order.objects.get(id=pk)
	if request.method == "POST":
		order.delete()
		return redirect('/')

	context = {'item':order}
	return render(request, 'accounts/delete.html', context)

# REST API

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'Product List': '/product-list/',
		'Product Detail View': '/product-detail/<str:pk>',
		'Product Create': '/product-create/',
		'Product Update': '/product-update/<str:pk>/',
		'Product Delete': '/product-delete/<str:pk>/',
		'Customer List': '/customer-list/',
		'Customer Detail View': '/product-detail/<str:pk>',
		'Order List': '/order-list/',
		'Order Create': '/product-create/',
		'Order Update': '/product-update/<str:pk>/',
		'Order Delete': '/product-delete/<str:pk>/'
	}
	return Response(api_urls)

# Products

@api_view(['GET'])
def productList(request):
	products = Product.objects.all()
	serializer = ProductSerializer(products, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def productDetail(request, pk):
	product = Product.objects.get(id=pk)
	serializer = ProductSerializer(product, many=False)
	return Response(serializer.data)

@api_view(['POST'])
def productCreate(request):
	serializer = ProductSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def productUpdate(request, pk):
	product = Product.objects.get(id=pk)
	serializer = ProductSerializer(instance=product, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def productDelete(request, pk):
	product = Product.objects.get(id=pk)
	product.delete()
	
	return Response('Item successfully deleted!')

# Customers

@api_view(['GET'])
def customerList(request):
	customers = Customer.objects.all()
	serializer = CustomerSerializer(customers, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def customerDetail(request, pk):
	customer = Customer.objects.get(id=pk)
	serializer = CustomerSerializer(customer, many=False)
	return Response(serializer.data)

@api_view(['POST'])
def customerCreate(request):
	serializer = CustomerSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def customerUpdate(request, pk):
	customer = Customer.objects.get(id=pk)
	serializer = CustomerSerializer(instance=customer, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def customerDelete(request, pk):
	customer = Customer.objects.get(id=pk)
	customer.delete()
	
	return Response('Customer deleted!')

# Orders

@api_view(['GET'])
def orderList(request):
	orders = Order.objects.all()
	serializer = OrderSerializer(orders, many=True)
	return Response(serializer.data)

@api_view(['POST'])
def orderCreate(request):
	body = json.loads(request.body)
	customer = Customer.objects.get(name=body["customer"])
	product = Product.objects.get(name=body["product"])
	order = Order.objects.create(customer=customer, product=product)
	serializer = OrderSerializer(instance=order, data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)

@api_view(['PUT'])
def orderUpdate(request, pk):
	order = Order.objects.get(id=pk)
	serializer = OrderSerializer(instance=order, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def orderDelete(request, pk):
	order = Order.objects.get(id=pk)
	order.delete()
	
	return Response('Order successfully deleted!')

