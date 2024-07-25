import speech_recognition as sr
import pyaudio

def recognize_speech():
    # Create a recognizer object
    recognizer = sr.Recognizer()

    # Use the default microphone as the audio source
    with sr.Microphone() as source:
        print("Listening... Speak now!")
        
        # Adjust for ambient noise and listen
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)

    try:
        # Use Google Speech Recognition
        text = recognizer.recognize_google(audio)
        print(f"You said: {text}")
    except sr.UnknownValueError:
        print("Sorry, I couldn't understand that.")
    except sr.RequestError as e:
        print(f"Could not request results from the speech recognition service; {e}")

# Run the speech recognition
while True:
    recognize_speech()
    
    # Ask if the user wants to continue
    response = input("Do you want to continue? (yes/no): ").lower()
    if response != 'yes':
        break

print("Speech recognition ended.")