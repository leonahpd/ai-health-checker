from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class SymptomRequest(BaseModel):
    symptoms: list[str]

@router.post("/predict")
def predict(data: SymptomRequest):
    return {
        "disease": "Flu",
        "confidence": "87%",
        "precautions": ["Rest", "Drink fluids"]
    }
