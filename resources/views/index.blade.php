        @extends('layouts.app')
        @section('content')
        <div class="my-image-div">
            <img src="img/chat-benefits.png" alt="header" style="width:100%" class="my-div-image">
            <div class="w3-display-topleft w3-container w3-text-white w3-padding-64 w3-hide-small">
                <h3>ChatApp</h3>
                <p><b>The Ultimate Chat Solution</b></p>
            </div>
        </div>
        <div class="container w3-container">
            <div class="w3-container">
                <h2>Top Reviews</h2>
                <div class="w3-container w3-card w3-margin-top">               
                    <img src="img/me.jpg" class="w3-circle w3-margin" style="width: 50px;height:50px" alt="name">
                    <b>Magical Messi</b>
                    <div class=" w3-margin font-italic my-self" style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
                        <span style="color:#0078ff;">&#10077;</span> I have been using this app and it has been very good to me  <span style="color:#0078ff;">&#10078;</span>
                </div>
                </div>
                <div class="w3-container w3-card w3-margin-top">
                    <img src="img/me.jpg" class="w3-circle w3-margin" style="width: 50px;height:50px"> <b>John Doe</b>
                    <div class="w3-margin  font-italic my-self" style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
                        <span style="color:#0078ff;">&#10077;</span> Wonderful Application, Superb <span style="color:#0078ff;">&#10078;</span>
                </div>
                </div>
                
                
            </div><br>
            <div class="container w3-container">
                <h2>My Skills</h2>
                <div class="w3-row">
                    <!-- <div class="row"> -->
                    <div class="card w3-card w3-hover-blue w3-round-medium w3-third">
                        <h2 class="text-center">React</h2>
                        <img src="img/React.png" alt="" class="img-in-card react">
                    </div>
                    <div class="w3-card-4 card w3-hover-blue w3-round-medium w3-third">
                        <h2 class="text-center">Linux</h2>
                        <img src="img/Linux.png" alt="" class="img-in-card">
                    </div>
                    <div class="w3-card-4 card w3-hover-blue w3-round-medium w3-third">
                        <h2 class="text-center">VUE JS</h2>
                        <img src="img/vuejs.png" alt="" class="img-in-card">
                    </div>
                </div>
                <br>
            </div>
            
            <div class="card w3-card">
                <div class="rounded">
                    <img src="img/me.jpg" alt="johnpaul" class="rounded-circle w3-small w3-circle" style="width:100px; height:100px">
                </div>
            </div>
        </div>
@endsection
@section('footer')
@include('includes.footer')
@endsection