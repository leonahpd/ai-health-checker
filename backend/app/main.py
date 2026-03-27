from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class SymptomRequest(BaseModel):
    symptoms: list[str]

@app.post("/predict")
def predict(data: SymptomRequest):
    # Dummy AI logic (replace with model)
    return {
        "disease": "Flu",
        "confidence": "87%",
        "precautions": ["Rest", "Hydration"]
    }
