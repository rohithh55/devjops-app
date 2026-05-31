import PocketBase from 'pocketbase';

// Replace <your-ec2-ip> with your actual EC2 public IP
const pb = new PocketBase("http://<your-ec2-ip>:8090");

export default pb;
