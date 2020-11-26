from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    # customer = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    # product = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    class Meta:
        model = Order
        fields = '__all__'
        depth=1
    
    # def create(self, validated_data):
    #     print(validated_data)
    #     try:
    #         valid_customer = validated_data.pop('customer')
    #         customer_serializer = self.fields['customer']
    #     except:
    #         pass
    #     return Order.objects.create(**validated_data)
