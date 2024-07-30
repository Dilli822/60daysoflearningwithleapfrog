
# import sys
# import threading
# from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QPushButton, QTextEdit, QLabel
# from PyQt5.QtCore import QThread, pyqtSignal, pyqtSlot
# import speech_recognition as sr

# class SpeechRecognitionThread(QThread):
#     recognized_text = pyqtSignal(str)
#     stop_signal = pyqtSignal()

#     def __init__(self):
#         super().__init__()
#         self._running = True

#     def run(self):
#         recognizer = sr.Recognizer()
#         while self._running:
#             with sr.Microphone() as source:
#                 print("Listening... Speak now!")
#                 recognizer.adjust_for_ambient_noise(source)
#                 audio = recognizer.listen(source)
#             try:
#                 text = recognizer.recognize_google(audio).lower()
#                 print(f"You said: {text}")
#                 self.recognized_text.emit(text)
#             except sr.UnknownValueError:
#                 self.recognized_text.emit("Sorry, I couldn't understand that.")
#             except sr.RequestError as e:
#                 self.recognized_text.emit(f"Could not request results from the speech recognition service; {e}")

#     def stop(self):
#         self._running = False
#         self.quit()
#         self.wait()

# class SpeechApp(QWidget):
#     def __init__(self):
#         super().__init__()
#         self.initUI()
#         self.thread = None

#     def initUI(self):
#         self.setWindowTitle('Speech Recognition App')

#         self.layout = QVBoxLayout()
        
#         self.instruction_label = QLabel('Press "Recognize Speech" to start speaking.\nPress "Stop" to end recognition.\nSay "close yourself" to exit.')
#         self.layout.addWidget(self.instruction_label)

#         self.recognize_button = QPushButton('Recognize Speech', self)
#         self.recognize_button.clicked.connect(self.start_recognition)
#         self.layout.addWidget(self.recognize_button)

#         self.stop_button = QPushButton('Stop', self)
#         self.stop_button.clicked.connect(self.stop_recognition)
#         self.layout.addWidget(self.stop_button)

#         self.text_box = QTextEdit()
#         self.text_box.setReadOnly(True)
#         self.layout.addWidget(self.text_box)

#         self.setLayout(self.layout)
#         self.setGeometry(300, 300, 400, 300)

#     def start_recognition(self):
#         if self.thread is None or not self.thread.isRunning():
#             self.thread = SpeechRecognitionThread()
#             self.thread.recognized_text.connect(self.update_text)
#             self.thread.start()

#     def stop_recognition(self):
#         if self.thread is not None and self.thread.isRunning():
#             self.thread.stop()
#             self.thread = None

#     @pyqtSlot(str)
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



# import sys
# from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QHBoxLayout, QPushButton, QTextEdit, QLabel
# from PyQt5.QtCore import QThread, pyqtSignal, pyqtSlot
# import speech_recognition as sr

# class SpeechRecognitionThread(QThread):
#     recognized_text = pyqtSignal(str)
#     listening_signal = pyqtSignal(str)
#     stop_signal = pyqtSignal()

#     def __init__(self):
#         super().__init__()
#         self._running = True

#     def run(self):
#         recognizer = sr.Recognizer()
#         while self._running:
#             with sr.Microphone() as source:
#                 self.listening_signal.emit("Listening... Speak now!")
#                 recognizer.adjust_for_ambient_noise(source)
#                 audio = recognizer.listen(source)
#             try:
#                 text = recognizer.recognize_google(audio).lower()
#                 print(f"You said: {text}")
#                 self.recognized_text.emit(text)
#             except sr.UnknownValueError:
#                 self.recognized_text.emit("Sorry, I couldn't understand that.")
#             except sr.RequestError as e:
#                 self.recognized_text.emit(f"Could not request results from the speech recognition service; {e}")

#     def stop(self):
#         self._running = False
#         self.quit()
#         self.wait()

# class SpeechApp(QWidget):
#     def __init__(self):
#         super().__init__()
#         self.initUI()
#         self.thread = None

#     def initUI(self):
#         self.setWindowTitle('Speech Recognition App')

#         self.main_layout = QVBoxLayout()

#         # Top instructions
#         self.instruction_label = QLabel('Press "Recognize Speech" to start speaking.\nPress "Stop" to end recognition.\nSay "close yourself" to exit.')
#         self.main_layout.addWidget(self.instruction_label)

#         # Horizontal layout for status and recognized text
#         self.h_layout = QHBoxLayout()

#         # Status label on the right
#         self.status_label = QLabel('')
#         self.h_layout.addStretch()  # Push status_label to the right
#         self.h_layout.addWidget(self.status_label)

#         # Text box on the left
#         self.text_box = QTextEdit()
#         self.text_box.setReadOnly(True)
#         self.h_layout.addWidget(self.text_box)

#         self.main_layout.addLayout(self.h_layout)

#         # Buttons
#         self.button_layout = QHBoxLayout()
        
#         self.recognize_button = QPushButton('Recognize Speech', self)
#         self.recognize_button.clicked.connect(self.start_recognition)
#         self.button_layout.addWidget(self.recognize_button)

#         self.stop_button = QPushButton('Stop', self)
#         self.stop_button.clicked.connect(self.stop_recognition)
#         self.button_layout.addWidget(self.stop_button)

#         self.main_layout.addLayout(self.button_layout)

#         self.setLayout(self.main_layout)
#         self.setGeometry(300, 300, 600, 400)  # Increased width to accommodate layout
        
        

#     def start_recognition(self):
#         if self.thread is None or not self.thread.isRunning():
#             self.thread = SpeechRecognitionThread()
#             self.thread.listening_signal.connect(self.update_status)
#             self.thread.recognized_text.connect(self.update_text)
#             self.thread.start()

#     def stop_recognition(self):
#         if self.thread is not None and self.thread.isRunning():
#             self.thread.stop()
#             self.thread = None

#     @pyqtSlot(str)
#     def update_status(self, message):
#         self.status_label.setText(message)

#     @pyqtSlot(str)
#     def update_text(self, text):
#         if "close yourself" in text:
#             print("Closing the program as requested.")
#             QApplication.quit()
#         else:
#             self.text_box.append(f"You spoke: {text}")
#             with open('spoken_words.txt', 'a') as file:
#                 file.write(text + '\n')

# if __name__ == '__main__':
#     app = QApplication(sys.argv)
#     ex = SpeechApp()
#     ex.show()
#     sys.exit(app.exec_())
