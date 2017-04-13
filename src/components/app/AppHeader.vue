<template>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/" class="navbar-brand" active-class="active" exact>Stock Trader</router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                <router-link to="/" tag="li" active-class="active" exact><a class="nav-link">Home</a></router-link>
                <router-link to="/portfolio" tag="li" active-class="active"><a class="nav-link">Portfolio</a></router-link>
                <router-link to="/stocks" tag="li" active-class="active"><a class="nav-link">Stocks</a></router-link>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link">End Day</a>
                </li>
                <!--TODO: Fix issue with hover over far right icons.-->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="saveAndLoadLink" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">Save and Load</a>
                    <div class="dropdown-menu" aria-labelledby="saveAndLoadLink">
                        <a class="dropdown-item" href="#">Save</a>
                        <a class="dropdown-item" href="#">Load</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Funds: $10.000</a>
                </li>
            </ul>
        </div>
    </nav>
</template>