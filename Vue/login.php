<div class="register">
    
    <h2>Login here</h2>
    <br>
    <?php
    if(isset($message)){
        echo '<label>'.$message.'</label>';
    }
    ?>
    <br>
    <br>
    <form method = "post">
        <input type="text" name="nom" placeholder="your name" required > <br>
        <input type="password" name="motpasse"  placeholder="************" required> <br>
        <input type="submit" name="login" value="SIGN IN">
    </form>

</div>