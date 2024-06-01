#include<stdio.h>
#include<stdlib.h>
#define MAX 10

int count = 0;

struct stack{
    int items[MAX];
    int top;
};

typedef struct stack st;
// now I can use st instead writing whole code as struct stack st 

void createEmptyStack(st *s){
    s->top = -1;
}

// check if the stack is full
int isfull(st *s){
    if(s->top == MAX -1){
        return 1;
    }else{
        return 0;
    }
}

// check if the stack is empty
int isEmpty(st *s){
    if(s->top == -1){
        return 1;
    }else{
        return 0;
    }
}

// Adding/insertion of data into the stack if stack is not full
void push(st *s, int newitem){
    if(isfull(s)){
        printf("STACK FULL");
    }    
    else{
        s->top++;
        s->items[s->top] = newitem;
    }
    count++;
}

// poping or removing the element from the stack
void pop(st *s){
    if(isEmpty(s)){
        printf("EMPTY STACK");
    }else{
        printf("Item popped %d", s->items[s->top]);
        s->top--;
    }
    count--;
    printf("\n");
}

// display the elements of the stack
void printStack(st *s){
    printf("Stack: ");
    for(int i = 0; i < count; i++){
        printf("%d ", s->items[i]);
    }
    printf("\n");
}

// Driving main code
int main(){
    int ch;
    st *s = (st *)malloc(sizeof(st));
    
    createEmptyStack(s);
    
    push(s,1);
    push(s, 2);
    push(s, 3);
    push(s, 4);
    printf("Elements before poping out ");
    printStack(s);
    
    pop(s);
    
    printf("After popping out ");
    printStack(s);
}

