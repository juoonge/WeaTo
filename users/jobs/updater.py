
from apscheduler.schedulers.background import BackgroundScheduler
from .jobs import create_comment_reset

def start():
    print("jobs.updater.jobs")
    scheduler = BackgroundScheduler()
    scheduler.add_job(create_comment_reset, 'cron',hour=0)
    scheduler.start()