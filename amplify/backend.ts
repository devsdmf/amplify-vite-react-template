import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import * as s3 from 'aws-cdk-lib/aws-s3';

const backend = defineBackend({
  auth,
  data,
  storage,
});

const s3Bucket = backend.storage.resources.bucket as s3.Bucket;
s3Bucket.autoDeleteObjects = false;
