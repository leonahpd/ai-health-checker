from fastapi import APIRouter
from pydantic import BaseModel
from app.services.prediction_service import predict_disease

router = APIRouter()

class SymptomRequest(BaseModel):
    symptoms: list[str]

@router.post("/predict")
def predict(data: SymptomRequest):
    result = predict_disease(data.symptoms)
    return result
