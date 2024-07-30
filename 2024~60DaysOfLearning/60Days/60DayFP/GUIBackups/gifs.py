

# # import tkinter as tk
# # from PIL import Image, ImageTk

# # class GIFApp(tk.Tk):
# #     def __init__(self):
# #         super().__init__()
# #         self.title('GIF Display App')

# #         # Load the GIF file
# #         gif_path = 'voice_assistant.gif'  # Path to your GIF file
# #         self.image = Image.open(gif_path)
# #         self.tk_image = ImageTk.PhotoImage(self.image)

# #         # Create a Label to display the GIF
# #         self.gif_label = tk.Label(self, image=self.tk_image)
# #         self.gif_label.pack()

# #         # Set the window size
# #         self.geometry('300x300')  # Adjust as needed

# # if __name__ == '__main__':
# #     app = GIFApp()
# #     app.mainloop()


# import sys
# from PyQt5.QtWidgets import QApplication, QWidget, QLabel, QVBoxLayout
# from PyQt5.QtGui import QMovie

# class GIFApp(QWidget):
#     def __init__(self):
#         super().__init__()
#         self.initUI()

#     def initUI(self):
#         self.setWindowTitle('GIF Display App')

#         # Create a vertical layout
#         layout = QVBoxLayout()

#         # Create a QLabel to display the GIF
#         self.gif_label = QLabel(self)

#         # Load the GIF file
#         gif_path = 'voice_assistant.gif'  # Path to your GIF file
#         self.movie = QMovie(gif_path)

#         if self.movie.isValid():
#             self.gif_label.setMovie(self.movie)
#             self.gif_label.setFixedSize(300, 300)  # Set size to 300x300 px
#             self.movie.start()  # Start the GIF animation
#         else:
#             print(f"Failed to load GIF from {gif_path}")

#         # Add QLabel to layout
#         layout.addWidget(self.gif_label)

#         # Set the layout for the QWidget
#         self.setLayout(layout)
#         self.setGeometry(300, 300, 400, 400)  # Window size

# if __name__ == '__main__':
#     app = QApplication(sys.argv)
#     ex = GIFApp()
#     ex.show()
#     sys.exit(app.exec_())
