from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()
app.mount("/vendors", StaticFiles(directory="vendors"), name="vendors")
app.mount("/resources", StaticFiles(directory="resources"), name="resources")
app_templates = Jinja2Templates(directory=".")

@app.get("/")
def index(request: Request):
    return app_templates.TemplateResponse('index.html', {'request': request})