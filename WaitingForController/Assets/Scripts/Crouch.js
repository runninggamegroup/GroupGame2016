#pragma strict

function Start () 
{

}

function Update () 
{
	Crouch();
}

function Crouch()
{
	if(Input.GetKey(KeyCode.S))
	{
		transform.position.y = 0;
	}
	else if(Input.GetKey(KeyCode.Space))
	{
		transform.position.y = 2;
	}
	else
	{
		transform.position.y = 1;
	}
	
}