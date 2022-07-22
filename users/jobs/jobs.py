from users.models import NewUser

def create_comment_reset(): #0시에 모든 create_comment를 Fasle로 변경
    NewUser.objects.all().update(create_comment = False)
    
    