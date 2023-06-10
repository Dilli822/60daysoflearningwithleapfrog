#include <stdio.h>
#include <string.h>
#include <ctype.h>
#define MAX 100

// Function to check if the character is an operator
int isOperator(char c){ 
    return (!isalpha(c) && !isdigit(c));
}
// Function to get the priority of operators
int getPriority(char C)
{
	if (C == '-' || C == '+')
		return 1;
	else if (C == '*' || C == '/')
		return 2;
	else if (C == '^')
		return 3;
	return 0;
}

// Function to convert the infix expression to postfix
void infixToPostfix(char infix[], char postfix[]){
	int l = strlen(infix);
	int j = 0;
	char stack[MAX];
	int top = -1;

	stack[++top] = '(';
	infix[l++] = ')';
	infix[l] = '\0';

	for (int i = 0; i < l; i++){
		if (isalpha(infix[i]) || isdigit(infix[i]))
			postfix[j++] = infix[i];
		else if (infix[i] == '(')
			stack[++top] = '(';
		else if (infix[i] == ')')
		{
			while (stack[top] != '(')
				postfix[j++] = stack[top--];
			top--;
		}
		else
		{
			while (getPriority(stack[top]) >= getPriority(infix[i]))
				postfix[j++] = stack[top--];
			stack[++top] = infix[i];
		}
	}

	postfix[j] = '\0';
}

// Function to reverse a string
void reverseString(char str[]){
	int len = strlen(str);
	for (int i = 0; i < len / 2; i++)
	{
		char temp = str[i];
		str[i] = str[len - i - 1];
		str[len - i - 1] = temp;
	}
}

// Function to convert infix to prefix notation
void infixToPrefix(char infix[], char prefix[]){
	// Reverse String and replace ( with ) and vice versa
	// Get Postfix
	// Reverse Postfix

	int l = strlen(infix);

	// Reverse infix
	reverseString(infix);

	// Replace ( with ) and vice versa
	for (int i = 0; i < l; i++)
{
		if (infix[i] == '(')
		{
			infix[i] = ')';
		}
		else if (infix[i] == ')')
		{
			infix[i] = '(';
		}
	}
	char postfix[MAX];
	infixToPostfix(infix, postfix);
	// Reverse postfix
	reverseString(postfix);
	strcpy(prefix, postfix);
}

int main(){
	char infix[MAX];
	char prefix[MAX];

	printf("Enter infix expression: ");
	fgets(infix, sizeof(infix), stdin);
	infix[strcspn(infix, "\n")] = '\0';

	infixToPrefix(infix, prefix);
	printf("Converted infix expression to prefix expression: %s\n", prefix);

	return 0;
}
