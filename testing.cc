#include <string>
#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <math.h>
using namespace std;

int main(int argc, char* argv[]) {
    vector<float> sequence;
    vector<float> angles;
    angles.emplace_back(0);
    sequence.emplace_back(360);
    float a = 360;
    float b;
    for (int i = 1; i <= 10; ++i) {
        b = round((a - 10 * pow(1.22, i)) * 10000) / 10000;
        sequence.emplace_back(b);
        angles.emplace_back(10 * pow(1.22, i));
        a = b;
    }
    
    int l = 0;
    for (auto it = sequence.begin(); it != sequence.end(); ++it) {
        cout << *it << " slices: " << l << " Angle: " << angles[l] << endl;
        ++l;
    }
    return 0;
}
