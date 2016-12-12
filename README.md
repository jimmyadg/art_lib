# ARTlib

## An online neural net art analyzer

### Initial Concept


##### shell script  
In terminal

<code>$ sudo service docker start</code>
<code>$ sudo docker run -it -v tf_files:/tf_files gcr.io/tensorflow/tensorflow:latest-devel</code>

-- In docker

#cd /tensorflow

#git pull

#python tensorflow/examples/image_retraining/retrain.py --bottleneck_dir=/tf_files/bottlenecks --how_many_training_steps 500 --model_dir=/tf_files/inception --output_graph=/tf_files/retrainedlabels.txt --image_dir /tf_files/file_name

</code>
