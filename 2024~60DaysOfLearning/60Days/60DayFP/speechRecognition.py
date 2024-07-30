
# import sys
# from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QHBoxLayout, QPushButton, QTextEdit, QLabel
# from PyQt5.QtGui import QMovie
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

#         # Text box on the left
#         self.text_box = QTextEdit()
#         self.text_box.setReadOnly(True)
#         self.h_layout.addWidget(self.text_box)

#         # Status label and GIF on the right
#         self.status_layout = QVBoxLayout()
#         self.status_label = QLabel('')
#         self.status_layout.addWidget(self.status_label)

#         # Add GIF label
#         self.gif_label = QLabel()
#         self.status_layout.addWidget(self.gif_label)
        
#         self.h_layout.addStretch()  # Push status_layout to the right
#         self.h_layout.addLayout(self.status_layout)

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

#         # Load and set the GIF
#         gif_path = 'https://cdn.dribbble.com/users/719632/screenshots/3401928/voice_assistant.gif'  # Replace with your GIF file path
#         self.movie = QMovie(gif_path)

#         if self.movie.isValid():
#             self.gif_label.setMovie(self.movie)
#             self.gif_label.setFixedSize(150, 150)
#             print(f"Loaded GIF from {gif_path}")
#         else:
#             print(f"Failed to load GIF from {gif_path}")

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
#         if "Listening" in message:
#             if self.movie.isValid():
#                 self.movie.start()  # Start GIF animation
#         else:
#             if self.movie.isValid():
#                 self.movie.stop()   # Stop GIF animation

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


# import sys
# from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QHBoxLayout, QPushButton, QTextEdit, QLabel
# from PyQt5.QtGui import QPainter, QColor
# from PyQt5.QtCore import QThread, pyqtSignal, pyqtSlot, Qt
# import speech_recognition as sr

# class CircleIndicator(QWidget):
#     def __init__(self, parent=None):
#         super().__init__(parent)
#         self.setFixedSize(100, 100)  # Set size for the circular widget

#     def paintEvent(self, event):
#         painter = QPainter(self)
#         painter.setRenderHint(QPainter.Antialiasing)
#         painter.setBrush(QColor(0, 255, 0))  # Green color
#         painter.drawEllipse(10, 10, 80, 80)  # Draw circle

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

#         # Text box on the left
#         self.text_box = QTextEdit()
#         self.text_box.setReadOnly(True)
#         self.h_layout.addWidget(self.text_box)

#         # Status label and circular indicator on the right
#         self.status_layout = QVBoxLayout()
#         self.status_label = QLabel('')
#         self.status_layout.addWidget(self.status_label)

#         # Add circular indicator
#         self.circle_indicator = CircleIndicator()
#         self.status_layout.addWidget(self.circle_indicator)
        
#         self.h_layout.addStretch()  # Push status_layout to the right
#         self.h_layout.addLayout(self.status_layout)

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
#         if "Listening" in message:
#             self.circle_indicator.setStyleSheet("background-color: green;")
#         else:
#             self.circle_indicator.setStyleSheet("background-color: white;")

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


import sys
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QHBoxLayout, QPushButton, QTextEdit, QLabel
from PyQt5.QtGui import QPainter, QColor
from PyQt5.QtCore import QThread, pyqtSignal, pyqtSlot, Qt, QPropertyAnimation, pyqtProperty
import speech_recognition as sr

class CircleIndicator(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self._radius = 40  # Initial radius
        self.setFixedSize(100, 100)
        self.animation = QPropertyAnimation(self, b"radius")
        self.animation.setDuration(1000)
        self.animation.setLoopCount(-1)  # Infinite loop
        self.animation.setStartValue(30)
        self.animation.setEndValue(50)
        self.setStyleSheet("background-color: white; border: 2px solid gray;")  # Initial color and border
        self.is_animating = False

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.setRenderHint(QPainter.Antialiasing)
        painter.setBrush(QColor(0, 255, 0))  # Green color for the circle
        center_x = self.width() // 2
        center_y = self.height() // 2
        painter.drawEllipse(center_x - self._radius, center_y - self._radius, self._radius * 2, self._radius * 2)  # Draw circle

    @pyqtProperty(int)
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        self._radius = value
        self.update()

    def start_animation(self):
        if not self.is_animating:
            self.is_animating = True
            self.animation.start()
            self.setStyleSheet("background-color: white; border: 2px solid green;")  # Change border color to green

    def stop_animation(self):
        if self.is_animating:
            self.is_animating = False
            self.animation.stop()
            self.setStyleSheet("background-color: white; border: 2px solid gray;")  # Reset border color
            self._radius = 40  # Reset radius
            self.update()

class SpeechRecognitionThread(QThread):
    recognized_text = pyqtSignal(str)
    listening_signal = pyqtSignal(str)
    stop_signal = pyqtSignal()

    def __init__(self):
        super().__init__()
        self._running = True

    def run(self):
        recognizer = sr.Recognizer()
        while self._running:
            with sr.Microphone() as source:
                self.listening_signal.emit("Listening... Speak now!")
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

        self.main_layout = QVBoxLayout()

        # Top instructions
        self.instruction_label = QLabel('Press "Recognize Speech" to start speaking.\nPress "Stop" to end recognition.\nSay "close yourself" to exit.')
        self.main_layout.addWidget(self.instruction_label)

        # Horizontal layout for status and recognized text
        self.h_layout = QHBoxLayout()

        # Text box on the left
        self.text_box = QTextEdit()
        self.text_box.setReadOnly(True)
        self.h_layout.addWidget(self.text_box)

        # Status label and circular indicator on the right
        self.status_layout = QVBoxLayout()
        self.status_label = QLabel('')
        self.status_layout.addWidget(self.status_label)

        # Add circular indicator
        self.circle_indicator = CircleIndicator()
        self.status_layout.addWidget(self.circle_indicator)
        
        self.h_layout.addStretch()  # Push status_layout to the right
        self.h_layout.addLayout(self.status_layout)

        self.main_layout.addLayout(self.h_layout)

        # Buttons
        self.button_layout = QHBoxLayout()
        
        self.recognize_button = QPushButton('Recognize Speech', self)
        self.recognize_button.clicked.connect(self.start_recognition)
        self.button_layout.addWidget(self.recognize_button)

        self.stop_button = QPushButton('Stop', self)
        self.stop_button.clicked.connect(self.stop_recognition)
        self.button_layout.addWidget(self.stop_button)

        self.main_layout.addLayout(self.button_layout)

        self.setLayout(self.main_layout)
        self.setGeometry(300, 300, 600, 400)  # Increased width to accommodate layout

    def start_recognition(self):
        if self.thread is None or not self.thread.isRunning():
            self.thread = SpeechRecognitionThread()
            self.thread.listening_signal.connect(self.update_status)
            self.thread.recognized_text.connect(self.update_text)
            self.thread.start()

    def stop_recognition(self):
        if self.thread is not None and self.thread.isRunning():
            self.thread.stop()
            self.thread = None

    @pyqtSlot(str)
    def update_status(self, message):
        self.status_label.setText(message)
        if "Listening" in message:
            self.circle_indicator.start_animation()
        else:
            self.circle_indicator.stop_animation()

    @pyqtSlot(str)
    def update_text(self, text):
        if "close yourself" in text:
            print("Closing the program as requested.")
            QApplication.quit()
        else:
            self.text_box.append(f"You spoke: {text}")
            with open('spoken_words.txt', 'a') as file:
                file.write(text + '\n')

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = SpeechApp()
    ex.show()
    sys.exit(app.exec_())
