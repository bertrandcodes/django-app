# Generated by Django 3.1.3 on 2020-11-27 05:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_product_tags'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='tags',
        ),
    ]
