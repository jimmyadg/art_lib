# ARTlib

## An online neural net art analyzer

### Initial Concept


##### shell script  
<code>-- In terminal <br><br>$ sudo service docker start<br><br>$ sudo docker run -it -v tf_files:/tf_files gcr.io/tensorflow/tensorflow:latest-devel<br><br><br><br>-- In docker<br><br>#cd /tensorflow<br><br>#git pull<br><br>#python tensorflow/examples/image_retraining/retrain.py --bottleneck_dir=/tf_files/bottlenecks --how_many_training_steps 500 --model_dir=/tf_files/inception --output_graph=/tf_files/retrainedlabels.txt --image_dir /tf_files/file_name

</code>
