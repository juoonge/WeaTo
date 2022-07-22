from rest_framework import permissions

# 생성: 로그인한 유저 // 편집: 글 작성자
class CustomReadOnly(permissions.BasePermission):

	def has_object_permission(self, request, view, obj):
    # GET, OPTIONS, HEAD 요청(R) 일 경우 액세스를 승인
		if request.method in permissions.SAFE_METHODS:
			return True
    # (U, D) 일 경우 obj.author(Post 작성자)가 request.user(현재 로그인 한 유저) 일 때 승인
		return obj.author == request.user