# ARTlib

<h3>An online neural net art analyzer</h3>

## Initial Concept
### UI Wireframe
<img src="https://github.com/jimmyadg/art_lib/blob/master/img/wireframe.jpg" width="100%"/>

## Dependencies
### Docker - [https://docs.docker.com/](https://docs.docker.com/)
### Tensorflow - [https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/?utm_campaign=chrome_series_machinelearning_063016&utm_source=gdev&utm_medium=yt-desc#2](https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/?utm_campaign=chrome_series_machinelearning_063016&utm_source=gdev&utm_medium=yt-desc#2)

### Full tf files - [https://drive.google.com/open?id=0B6mChz6ucdBHM19Ma25yVTlOOGc](https://drive.google.com/open?id=0B6mChz6ucdBHM19Ma25yVTlOOGc)

## Shell script for retraining Tensorflow
### In terminal

<code>$ sudo service docker start</code><br>
<code>$ sudo docker run -it -v $HOME/tf_files:/tf_files gcr.io/tensorflow/tensorflow:latest-devel</code><br><br>

### In docker

<code>#cd /tensorflow</code><br>

<code>#git pull</code><br>

<code># python tensorflow/examples/image_retraining/retrain.py \
--bottleneck_dir=/tf_files/bottlenecks \
--how_many_training_steps 500 \
--model_dir=/tf_files/inception \
--output_graph=/tf_files/retrained_graph.pb \
--output_labels=/tf_files/retrained_labels.txt \
--image_dir /tf_files/file_name</code><br>


## Process
### Retraining Tensorflow AI with abstraction, pop art, and impressionism art images
<img src="https://github.com/jimmyadg/art_lib/blob/master/img/training_process.png" width="80%"/>

### Retraining result - 79.6% accuracy
 <img src="https://github.com/jimmyadg/art_lib/blob/master/img/training_result.png" width="80%"/>

### Testing script to identify a pop art image
<img src="https://github.com/jimmyadg/art_lib/blob/master/img/run_test.png" width="80%"/>
