#pragma strict

function Start () 
{

}

function Update () 
{
	Jump();
}

function Jump()
{
	if(Input.GetKey(KeyCode.Space))
	{
		transform.position.y = 2;
	}
	else
	{
		transform.position.y = 1;
	}
}