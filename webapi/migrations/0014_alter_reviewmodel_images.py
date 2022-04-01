# Generated by Django 4.0.3 on 2022-03-28 10:21

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0013_alter_reviewmodel_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reviewmodel',
            name='images',
            field=models.FileField(blank=True, upload_to='media/uploads', validators=[django.core.validators.FileExtensionValidator(['png', 'jpg', 'jpeg', 'svg'])]),
        ),
    ]