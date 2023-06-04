#include<stdio.h>
#include <string.h>
int main(){

    // Data types 
    // Knowing data types helps to memory allocation, design and analysis algorithm ,Compatibility, efficiency
    // Basic data types 
    // derived data type in c
    // qualified data type

    
    int integerNum = 23;
    printf("Integer data type in C %d", integerNum);

    long long  int longIntNum = 3234234234234;
    printf("Long Integer data type in C %ld\n", longIntNum);

    float floatNum = 23.23;
    printf("Floating point data type in c %f\n", floatNum);

    double doubleNum = 23.4567;
    printf("Double data type in C %lf\n", doubleNum);


    // Derived data types in C 
    // array of integer data type
    int arr[5] = {1,2,3,4,5};

    // pointer variable
    int x = 23;
    int *y;
    y = &x;
    printf("Pointer variable stores address of normal variable %d\n", y);


    // structure 
    struct Person{
        char FullName[100];
        int age;
        float weight;
    };
    struct Person dilli;
    dilli.age = 24;
    dilli.weight =  60.45;
    strcpy(dilli.FullName, "Dilli Hang Rai");
    printf("Fullname:%s, Age: %d, Weight: %f", dilli.FullName, dilli.age, dilli.weight);
    printf("\n");

    // union
    union Employee{
        char Name[100];
        long int id;
        char address[100];
    };

    union Employee employee;
    strcpy(employee.Name, "Peter");
    strcpy(employee.address, "Kent UK");
    employee.id = 23758;

    printf("Fullname:%s, Id: %d, address: %s\n", employee.Name, employee.id, employee.address);


    printf("Size of int: %zu bytes\n", sizeof(int));
    printf("Size of float: %zu bytes\n", sizeof(float));
    printf("Size of char: %zu bytes\n", sizeof(char));
    printf("Size of double: %zu bytes\n", sizeof(double));


    return 0;
}