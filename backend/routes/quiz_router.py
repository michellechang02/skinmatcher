from typing import Optional
from fastapi import APIRouter, Request
from pydantic import BaseModel
from services.profile import create_profile, get_profile_by_id


quiz_router = APIRouter(
    prefix="/quiz",
    tags=["quiz"],
)

class CreateProfileRequest(BaseModel):
    name: str
    avatar_url: Optional[str]

@quiz_router.get("/quiz")
async def get_profile_handler(request: Request, uid: str):
    response = get_profile_by_id(request.app.supabase, uid)
    return response