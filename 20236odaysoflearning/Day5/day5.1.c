#include<stdio.h>
// stdlib is used here for dynamic memory allocation in C
#include<stdlib.h> 

struct stack{
    int size;
    int top;
    int *arr;
};

int isEmpty(struct stack *ptr){
    if(ptr->top == -1){
        return 1;
    }else{
        return 0;
    }
};

int isFull(struct stack *ptr){
    if(ptr->top == ptr->size-1){
        return 1;
    }else{
        return 0;
    }
};

void push(struct stack *ptr, int val){
    if(isFull(ptr)){
        printf("Stack overflow! Cannot push %d to the stack \n", val);
    }else{
        ptr->top++;
        ptr->arr[ptr->top] = val;
    }
};

int pop(struct stack *ptr){
    if(isEmpty(ptr)){
        printf("Stack Underflow! Cannot pop or delete from the stack\n");
        return -1;
    }else{
        int val = ptr->arr[ptr->top];
        ptr->top--;
        return val;
    }
};

int main(){
    struct stack *sp = (struct stack *) malloc(sizeof(struct stack));
    sp->size = 6;
    sp->top = -1;
    sp->arr = (int *) malloc(sp->size * sizeof(int));

    printf("Stack is created successfully\n");
    printf("Stack is full %d\n", isFull(sp));
    printf("Stack is empty %d\n", isEmpty(sp));

    push(sp,1);
    push(sp,2);
    push(sp,3);
    push(sp,89);
    push(sp,95);
    push(sp,92);
    
    // excess element
    push(sp,52);

    printf("Popped %d from the stack \n", pop(sp));
    printf("Popped %d from the stack \n", pop(sp));
    printf("Popped %d from the stack \n", pop(sp));
    printf("Popped %d from the stack \n", pop(sp));
    printf("Popped %d from the stack \n", pop(sp));
    printf("Popped %d from the stack \n", pop(sp));



    return 0;

}