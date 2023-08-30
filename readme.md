# Use case of cluster on Node.js

Example of usage of the cluster module from node.js to run max cpu threads at the same time.
The two folders on this project are benchmark comparisons between tests using autocannon on a (1) simple API and (2) many copies of an API using the cluster module to manage and runs multiple workers.
The code also uses graceful shutdown as a strategy to make the workers end their conections before closing.

*This example was made based on the video of Erick Wendel (YouTube link: https://www.youtube.com/watch?v=50-9uorSYw0)
