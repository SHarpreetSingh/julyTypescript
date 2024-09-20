// CPP program to check for balanced brackets.
#include <bits/stdc++.h>
#include <vector>
#include <deque>

using namespace std;

// function to check if brackets are balanced
// bool areBracketsBalanced(string expr)
// {
//     stack<char> s;
//     char x;

//     // Traversing the Expression
//     for (int i = 0; i < expr.length(); i++)
//     {
//         if (expr[i] == '(' || expr[i] == '[' || expr[i] == '{')
//         {
//             // Push the element in the stack
//             s.push(expr[i]);
//             continue;
//         }

//         // IF current current character is not opening
//         // bracket, then it must be closing. So stack
//         // cannot be empty at this point.
//         if (s.empty())
//             return false;

//         switch (expr[i])
//         {
//         case ')':

//             // Store the top element in a
//             x = s.top();
//             s.pop();
//             if (x == '{' || x == '[')
//                 return false;
//             break;

//         case '}':

//             // Store the top element in b
//             x = s.top();
//             s.pop();
//             if (x == '(' || x == '[')
//                 return false;
//             break;

//         case ']':

//             // Store the top element in c
//             x = s.top();
//             s.pop();
//             if (x == '(' || x == '{')
//                 return false;
//             break;
//         }
//     }

//     // Check Empty Stack
//     return (s.empty());
// }

// Driver code
int main()
{
    // string expr = "{()}[]";

    // // Function call
    // if (areBracketsBalanced(expr))
    //     cout << "Balanced";
    // else
    //     cout << "Not Balanced";
    // return 0;

    vector<int> v;
    cout << "capacity " << v.capacity() << endl;

    v.push_back(1);
    cout << "Size " << v.size() << endl;

    v.push_back(2);
    cout << "Size " << v.size() << endl;

    v.push_back(3);
    cout << "Size " << v.size() << endl;

    cout << "before " << endl;

    for(int i:v){
        cout << i<< " i ";
    }cout <<endl;

    v.pop_back();
    cout << "v.size() " << v.size() <<endl;

    

}



