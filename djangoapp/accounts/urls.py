from django.urls import path, include
from . import views

urlpatterns = [

    # HTML Template Rendering

    path('', views.home, name="home"),
    path('products/', views.products, name='products'),
    path('customer/<str:pk_test>/', views.customer, name="customer"),
    path('create_order/', views.createOrder, name="create_order"),
    path('update_order/<str:pk>/', views.updateOrder, name="update_order"),
    path('delete_order/<str:pk>/', views.deleteOrder, name="delete_order"),

    # REST API

    path('api/', views.apiOverview, name="api-overview"),

    # Products

    path('product-list/', views.productList, name="product-list"),
    path('product-detail/<str:pk>/', views.productDetail, name="product-detail"),
    path('product-create/', views.productCreate, name="product-create"),
    path('product-update/<str:pk>/', views.productUpdate, name="product-update"),
    path('product-delete/<str:pk>/', views.productDelete, name="product-delete"),

    # Customers

    path('customer-list/', views.customerList, name="customer-list"),
    path('customer-detail/<str:pk>/', views.customerDetail, name="customer-detail"),
    path('customer-create/', views.customerCreate, name="customer-create"),
    path('customer-update/<str:pk>/', views.customerUpdate, name="customer-update"),
    path('customer-delete/<str:pk>/', views.customerDelete, name="customer-delete"),

    # Orders

    path('order-list/', views.orderList, name="order-list"),
    path('order-create/', views.orderCreate, name="order-create"),
    path('order-update/<str:pk>/', views.orderUpdate, name="order-update"),
    path('order-delete/<str:pk>/', views.orderDelete, name="order-delete"),
]