#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider)
{
	//EditorApplication.isPlaying = false;
	EditorApplication.isPaused = true;
}