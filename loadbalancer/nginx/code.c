#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int parseToInt(const char* s, int start, int stop) {
    unsigned long long int m = 1;
    int ret = 0;

    for (int i = stop; i >= start; i--) {
      if(isdigit(s[i])){
        ret += (s[i] - '0') * m;
        m *= 10;
      }
    }

    return ret;
}

int main(int argc, char const *argv[]) {
  printf("Getting app 1 CPU status....\n");

  FILE *fp;
  char path[1035] = "";

  /* Open the command for reading. */
  fp = popen("snmpget -v 3 -u authOnlyUser -l authPriv -a MD5 -A temp_password -x DES -X temp_password cloud.rafaelferreira.pt 'NET-SNMP-EXTEND-MIB::nsExtendOutputFull.\"app1\"'", "r");
  if (fp == NULL) {
    printf("Failed to run command\n" );
    exit(1);
  }

  /* Read the output a line at a time - output it. */
  while (fgets(path, sizeof(path)-1, fp) != NULL) {
    printf("%s", path);
  }

  /* close */
  pclose(fp);

  // parse what we need
  char app1[10];

  int pos = 57;
  int i = pos;

  while(path[i]!=0){
    app1[i-pos] = path[i];
    i = i + 1;
  }

  int app1_val = parseToInt(app1, 0, i-pos-1);

  printf("VALUE APP1: %d (%%)\n", app1_val);

  printf("Getting app 2 CPU status....\n");
  FILE *fp2;
  char path2[1035];

  /* Open the command for reading. */
  fp2 = popen("snmpget -v 3 -u authOnlyUser -l authPriv -a MD5 -A temp_password -x DES -X temp_password cloud.rafaelferreira.pt 'NET-SNMP-EXTEND-MIB::nsExtendOutputFull.\"app2\"'", "r");
  if (fp2 == NULL) {
    printf("Failed to run command\n" );
    exit(1);
  }

  /* Read the output a line at a time - output it. */
  while (fgets(path2, sizeof(path2)-1, fp2) != NULL) {
    printf("%s", path2);
  }

  /* close */
  pclose(fp2);

  // parse what we need
  char app2[10];

  i = pos;

  while(path[i]!=0){
    app1[i-pos] = path[i];
    i = i + 1;
  }

  int app2_val = parseToInt(app2, 0, i-pos-1);

  printf("VALUE APP2: %d (%%)\n", app2_val);

  return 0;
}
