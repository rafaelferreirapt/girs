/*
 * shm-client - client program to demonstrate shared memory.
 */
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <stdio.h>

#define SHMSZ     27

main()
{
  // https://www.cs.cf.ac.uk/Dave/C/node27.html

  int shmid;
  key_t key;
  int *shm, *s;

  /*
   * We need to get the segment named
   * "5678", created by the server.
   */
  key = 5678;

  /*
   * Locate the segment.
   */
  if ((shmid = shmget(key, SHMSZ, 0666)) < 0) {
      perror("shmget");
      exit(1);
  }

  /*
   * Now we attach the segment to our data space.
   */
  if ((shm = shmat(shmid, NULL, 0)) == (int *) -1) {
      perror("shmat");
      exit(1);
  }

  /*
   * Now read what the server put in the memory.
   */
   s = shm;

   printf("%d\n", *s);

  exit(0);
}
