from django.contrib import admin
from webapi.models import *
from import_export.admin import ImportExportModelAdmin
from mptt.admin import DraggableMPTTAdmin, MPTTModelAdmin
# Register your models here.
admin.site.register(User)
admin.site.register(MembershipPlan)
# admin.site.register(Category, ImportExportModelAdmin)

class CategoryAdmin(ImportExportModelAdmin, DraggableMPTTAdmin, admin.ModelAdmin):
	# change_list_template = "admin/import_export/category_change_form.html"
	list_display = ['id','tree_actions','indented_title', 'name', 'unique_identifier' ,'image', 'ceated_date','update_date',]
	# ordering = ('unique_identifier',)
	search_fields = ['name', 'unique_identifier',]
	fields = (('name'), ('parent'),('unique_identifier'),('slug'),('CategoryType'),('image'))
	mptt_level_indent = 40

	def ceated_date(self, obj):
		if obj:
			return obj.created_at.date() 
	ceated_date.admin_order_field = 'created_at'

	def update_date(self, obj):
		if obj:
			return obj.updated_at.date() 
	update_date.admin_order_field = 'updated_at'
	
	pass

admin.site.register(Category, CategoryAdmin)

class ReviewModelAdmin(ImportExportModelAdmin):
	# change_list_template = "admin/import_export/reviewmodel_change_form.html"
	list_display = ['author', 'title', 'unique_identifiers', 'tag_list', 'only_to_my_page' , 'ceated_date', 'update_date']
	ordering = ('unique_identifier',)
	search_fields = ['unique_identifier', 'title', 'author__username',]
	list_filter = ['only_to_my_page', 'created_at',]
	fields = (('only_to_my_page'),('title'),('tags'),('categories'),('author'),('unique_identifier'),('meta_keywords'),('meta_description'),('images'), ('content'))

	def unique_identifiers(self, obj):
		try:
			if obj:
				get_unique = obj.unique_identifier
				get_1st_four_value = int(str(get_unique)[:4])
				get_2nd_four_value = int(str(get_unique)[4:8])
				get_last_four_value = int(str(get_unique)[8:12])
				finaliz_value = (f"{get_1st_four_value} - {get_2nd_four_value} - {get_last_four_value}")
				return finaliz_value
		except:
			pass

	unique_identifiers.admin_order_field = "unique_identifier"

	def get_queryset(self, request):
		return super().get_queryset(request).prefetch_related('tags')

	def tag_list(self, obj):
		return u", ".join(o.name for o in obj.tags.all())

	def ceated_date(self, obj):
		if obj:
			return obj.created_at.date() 
	ceated_date.admin_order_field = 'created_at'

	def update_date(self, obj):
		if obj:
			return obj.updated_at.date() 
	update_date.admin_order_field = 'updated_at'
	
	pass	

admin.site.register(ReviewModel,ReviewModelAdmin)



