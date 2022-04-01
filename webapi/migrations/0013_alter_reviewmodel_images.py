# Generated by Django 4.0.3 on 2022-03-28 10:19

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0012_alter_reviewmodel_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reviewmodel',
            name='images',
            field=models.FileField(blank=True, upload_to='post', validators=[django.core.validators.FileExtensionValidator(['png', 'jpg', 'jpeg', 'svg'])]),
        ),
    ]