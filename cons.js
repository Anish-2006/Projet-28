class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness: 0.005,
            length : 0
        }

        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }


    fly(){

        this.launcher.bodyA = null;


    }

    attach(body){


        this.launcher.bodyA = body;
    }


    
    display(){
        if(this.launcher.bodyA){
        
        }

    }
    
}
