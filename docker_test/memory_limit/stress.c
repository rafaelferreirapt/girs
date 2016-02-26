#include <stdlib.h>
#include <stdio.h>

int main(void) {
    int i;
    for (i=0; i<165536; i++) {
        char *q = malloc(165536);
        printf ("Malloced: %ld\n", 165536*i);
    }
    sleep(9999999);
}
