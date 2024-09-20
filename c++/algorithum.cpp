#include <bits/stdc++.h>
#include <algorithm>

#include <vector>

using namespace std;
int main()
{
    vector<int> v;

    v.push_back(1);
    v.push_back(4);
    v.push_back(5);
    v.push_back(17);

    rotate(v.begin(), v.begin()-1, v.end());
    for (auto i : v)
    {
        cout << "after roatet " << i << endl;
    }

}
