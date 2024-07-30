# import speech_recognition as sr
# # Need Internet uses Google API for Speech to text translation
# def recognize_speech():
#     # Create a recognizer object
#     recognizer = sr.Recognizer()

#     # Use the default microphone as the audio source
#     with sr.Microphone() as source:
#         print("Listening... Speak now!")
        
#         # Adjust for ambient noise and listen
#         recognizer.adjust_for_ambient_noise(source)
#         audio = recognizer.listen(source)

#     try:
#         # Use Google Speech Recognition
#         text = recognizer.recognize_google(audio)
#         print(f"You said: {text}")
#         return text
#     except sr.UnknownValueError:
#         print("Sorry, I couldn't understand that.")
#         return None
#     except sr.RequestError as e:
#         print(f"Could not request results from the speech recognition service; {e}")
#         return None

# def main():
#     print("Press CTRL + C to stop the program.")
#     try:
#         while True:
#             result = recognize_speech()
#             if result:
#                 with open('spoken_words.txt', 'a') as file:
#                     file.write(result + '\n')
#     except KeyboardInterrupt:
#         print("\nSpeech recognition ended by user.")

# if __name__ == "__main__":
#     main()


# import speech_recognition as sr

# def recognize_speech():
#     # Create a recognizer object
#     recognizer = sr.Recognizer()

#     # Use the default microphone as the audio source
#     with sr.Microphone() as source:
#         print("Listening... Speak now!")
        
#         # Adjust for ambient noise and listen
#         recognizer.adjust_for_ambient_noise(source)
#         audio = recognizer.listen(source)

#     try:
#         # Use Google Speech Recognition
#         text = recognizer.recognize_google(audio)
#         print(f"You said: {text}")
#         return text.lower()
#     except sr.UnknownValueError:
#         print("Sorry, I couldn't understand that.")
#         return None
#     except sr.RequestError as e:
#         print(f"Could not request results from the speech recognition service; {e}")
#         return None

# def main():
#     print("Press CTRL + C to stop the program or say 'close yourself' to exit.")
#     try:
#         while True:
#             result = recognize_speech()
#             if result:
#                 if "close yourself" in result:
#                     print("Closing the program as requested.")
#                     break
#                 with open('spoken_words.txt', 'a') as file:
#                     file.write(result + '\n')
#     except KeyboardInterrupt:
#         print("\nSpeech recognition ended by user.")

# if __name__ == "__main__":
#     main()


# import sys
# import threading
# from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QPushButton, QTextEdit, QLabel
# from PyQt5.QtCore import QThread, pyqtSignal
# import speech_recognition as sr

# class SpeechRecognitionThread(QThread):
#     recognized_text = pyqtSignal(str)

#     def run(self):
#         recognizer = sr.Recognizer()
#         with sr.Microphone() as source:
#             print("Listening... Speak now!")
#             recognizer.adjust_for_ambient_noise(source)
#             audio = recognizer.listen(source)
#         try:
#             text = recognizer.recognize_google(audio).lower()
#             print(f"You said: {text}")
#             self.recognized_text.emit(text)
#         except sr.UnknownValueError:
#             self.recognized_text.emit("Sorry, I couldn't understand that.")
#         except sr.RequestError as e:
#             self.recognized_text.emit(f"Could not request results from the speech recognition service; {e}")

# class SpeechApp(QWidget):
#     def __init__(self):
#         super().__init__()
#         self.initUI()

#     def initUI(self):
#         self.setWindowTitle('Speech Recognition App')

#         self.layout = QVBoxLayout()
        
#         self.instruction_label = QLabel('Press "Recognize Speech" and start speaking.\nSay "close yourself" to exit.')
#         self.layout.addWidget(self.instruction_label)

#         self.recognize_button = QPushButton('Recognize Speech', self)
#         self.recognize_button.clicked.connect(self.start_recognition)
#         self.layout.addWidget(self.recognize_button)

#         self.text_box = QTextEdit()
#         self.text_box.setReadOnly(True)
#         self.layout.addWidget(self.text_box)

#         self.setLayout(self.layout)
#         self.setGeometry(300, 300, 400, 300)

#     def start_recognition(self):
#         self.thread = SpeechRecognitionThread()
#         self.thread.recognized_text.connect(self.update_text)
#         self.thread.start()

#     def update_text(self, text):
#         if "close yourself" in text:
#             print("Closing the program as requested.")
#             QApplication.quit()
#         else:
#             self.text_box.append(text)
#             with open('spoken_words.txt', 'a') as file:
#                 file.write(text + '\n')

# if __name__ == '__main__':
#     app = QApplication(sys.argv)
#     ex = SpeechApp()
#     ex.show()
#     sys.exit(app.exec_())


import sys
import threading
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QPushButton, QTextEdit, QLabel
from PyQt5.QtCore import QThread, pyqtSignal, pyqtSlot
import speech_recognition as sr

class SpeechRecognitionThread(QThread):
    recognized_text = pyqtSignal(str)
    stop_signal = pyqtSignal()

    def __init__(self):
        super().__init__()
        self._running = True

    def run(self):
        recognizer = sr.Recognizer()
        while self._running:
            with sr.Microphone() as source:
                print("Listening... Speak now!")
                recognizer.adjust_for_ambient_noise(source)
                audio = recognizer.listen(source)
            try:
                text = recognizer.recognize_google(audio).lower()
                print(f"You said: {text}")
                self.recognized_text.emit(text)
            except sr.UnknownValueError:
                self.recognized_text.emit("Sorry, I couldn't understand that.")
            except sr.RequestError as e:
                self.recognized_text.emit(f"Could not request results from the speech recognition service; {e}")

    def stop(self):
        self._running = False
        self.quit()
        self.wait()

class SpeechApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()
        self.thread = None

    def initUI(self):
        self.setWindowTitle('Speech Recognition App')

        self.layout = QVBoxLayout()
        
        self.instruction_label = QLabel('Press "Recognize Speech" to start speaking.\nPress "Stop" to end recognition.\nSay "close yourself" to exit.')
        self.layout.addWidget(self.instruction_label)

        self.recognize_button = QPushButton('Recognize Speech', self)
        self.recognize_button.clicked.connect(self.start_recognition)
        self.layout.addWidget(self.recognize_button)

        self.stop_button = QPushButton('Stop', self)
        self.stop_button.clicked.connect(self.stop_recognition)
        self.layout.addWidget(self.stop_button)

        self.text_box = QTextEdit()
        self.text_box.setReadOnly(True)
        self.layout.addWidget(self.text_box)

        self.setLayout(self.layout)
        self.setGeometry(300, 300, 400, 300)

    def start_recognition(self):
        if self.thread is None or not self.thread.isRunning():
            self.thread = SpeechRecognitionThread()
            self.thread.recognized_text.connect(self.update_text)
            self.thread.start()

    def stop_recognition(self):
        if self.thread is not None and self.thread.isRunning():
            self.thread.stop()
            self.thread = None

    @pyqtSlot(str)
    def update_text(self, text):
        if "close yourself" in text:
            print("Closing the program as requested.")
            QApplication.quit()
        else:
            self.text_box.append(text)
            with open('spoken_words.txt', 'a') as file:
                file.write(text + '\n')

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = SpeechApp()
    ex.show()
    sys.exit(app.exec_())
