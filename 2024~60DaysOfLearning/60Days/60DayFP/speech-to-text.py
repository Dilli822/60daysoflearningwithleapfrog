import speech_recognition as sr
# Need Internet uses Google API for Speech to text translation
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
        return text
    except sr.UnknownValueError:
        print("Sorry, I couldn't understand that.")
        return None
    except sr.RequestError as e:
        print(f"Could not request results from the speech recognition service; {e}")
        return None

def main():
    print("Press CTRL + C to stop the program.")
    try:
        while True:
            result = recognize_speech()
            if result:
                with open('spoken_words.txt', 'a') as file:
                    file.write(result + '\n')
    except KeyboardInterrupt:
        print("\nSpeech recognition ended by user.")

if __name__ == "__main__":
    main()


import speech_recognition as sr

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
        return text.lower()
    except sr.UnknownValueError:
        print("Sorry, I couldn't understand that.")
        return None
    except sr.RequestError as e:
        print(f"Could not request results from the speech recognition service; {e}")
        return None

def main():
    print("Press CTRL + C to stop the program or say 'close yourself' to exit.")
    try:
        while True:
            result = recognize_speech()
            if result:
                if "close yourself" in result:
                    print("Closing the program as requested.")
                    break
                with open('spoken_words.txt', 'a') as file:
                    file.write(result + '\n')
    except KeyboardInterrupt:
        print("\nSpeech recognition ended by user.")

if __name__ == "__main__":
    main()

