# Generated by Django 4.0.3 on 2022-03-18 10:14

import ckeditor.fields
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('webapi', '0005_alter_user_profile'),
    ]

    operations = [
        migrations.CreateModel(
            name='MembershipPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=30, null=True)),
                ('description', ckeditor.fields.RichTextField()),
                ('price', models.FloatField(default=0.0)),
                ('create_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('is_monthly', models.BooleanField(default=False)),
                ('is_three_month', models.BooleanField(default=False)),
                ('is_annual', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name_plural': 'MemberShip Plan for User',
            },
        ),
    ]