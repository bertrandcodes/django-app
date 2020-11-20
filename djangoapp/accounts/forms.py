from django.forms import ModelForm
from .models import Order

# create a form with everything in it

class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = '__all__'