#include <bits/stdc++.h>
#include <stack>

using namespace std;

int main() {
    stack <string> s;

    s.push("hey");
    s.push("hii u push");

    cout<<"top "<< s.top() <<endl;
    s.pop();
    cout<<"pop "<< s.top() <<endl;

    cout<<"top "<< s.size() <<endl;

    cout<<"empty or not "<< s.empty() <<endl;
// s.
}