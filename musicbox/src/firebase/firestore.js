function getDownloadData () {
    var storageRef = firebase.storage.ref();
    var locationAudio = storageRef.child ('audio');
    var storedAudio = locationAudio.child();

    return storedAudio.fullPath;
}