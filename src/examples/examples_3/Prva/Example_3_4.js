import React, { useState } from "react";
import "./Example.css"


function Example_3_4(){

    const [toggle, setToggle] = useState(false);

    function LoadPath(){
        setToggle(!toggle);
        if(toggle === false){
            document.getElementById('path3_3').setAttribute('class', 'like_3'); 
        }
        else{
            document.getElementById('path3_3').setAttribute('class', 'none'); 
        }
         
    }

    return(
        <>
            <svg width="478" height="338" viewBox="0 0 478 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M454.634 326.818V337H453.401V328.111H453.341L450.855 329.761V328.509L453.401 326.818H454.634ZM460.942 337.139C460.525 337.133 460.107 337.053 459.69 336.901C459.272 336.748 458.891 336.491 458.546 336.13C458.201 335.765 457.925 335.273 457.716 334.653C457.507 334.03 457.403 333.248 457.403 332.307C457.403 331.405 457.487 330.607 457.656 329.911C457.825 329.211 458.071 328.623 458.392 328.146C458.714 327.665 459.101 327.3 459.555 327.052C460.013 326.803 460.528 326.679 461.102 326.679C461.672 326.679 462.179 326.793 462.623 327.022C463.07 327.247 463.435 327.562 463.717 327.967C463.998 328.371 464.181 328.837 464.263 329.364H463.05C462.938 328.906 462.719 328.527 462.394 328.225C462.069 327.924 461.638 327.773 461.102 327.773C460.313 327.773 459.691 328.116 459.237 328.802C458.786 329.488 458.559 330.451 458.556 331.69H458.636C458.821 331.409 459.042 331.168 459.297 330.969C459.555 330.767 459.84 330.612 460.152 330.502C460.464 330.393 460.793 330.338 461.141 330.338C461.725 330.338 462.258 330.484 462.742 330.776C463.226 331.064 463.614 331.463 463.906 331.974C464.197 332.481 464.343 333.062 464.343 333.719C464.343 334.348 464.202 334.925 463.92 335.449C463.639 335.969 463.243 336.384 462.732 336.692C462.225 336.997 461.629 337.146 460.942 337.139ZM460.942 336.045C461.36 336.045 461.735 335.941 462.066 335.732C462.401 335.523 462.664 335.243 462.857 334.892C463.052 334.541 463.15 334.15 463.15 333.719C463.15 333.298 463.055 332.915 462.866 332.57C462.681 332.222 462.424 331.946 462.096 331.74C461.771 331.535 461.4 331.432 460.982 331.432C460.667 331.432 460.374 331.495 460.102 331.621C459.83 331.743 459.592 331.912 459.386 332.128C459.184 332.343 459.025 332.59 458.909 332.869C458.793 333.144 458.735 333.434 458.735 333.739C458.735 334.143 458.83 334.521 459.018 334.872C459.211 335.223 459.473 335.507 459.804 335.722C460.139 335.938 460.518 336.045 460.942 336.045ZM469.619 337.139C468.87 337.139 468.232 336.935 467.705 336.528C467.178 336.117 466.775 335.522 466.497 334.743C466.219 333.961 466.079 333.016 466.079 331.909C466.079 330.809 466.219 329.869 466.497 329.09C466.779 328.308 467.183 327.711 467.71 327.3C468.24 326.886 468.877 326.679 469.619 326.679C470.362 326.679 470.996 326.886 471.523 327.3C472.054 327.711 472.458 328.308 472.736 329.09C473.018 329.869 473.159 330.809 473.159 331.909C473.159 333.016 473.02 333.961 472.741 334.743C472.463 335.522 472.06 336.117 471.533 336.528C471.006 336.935 470.368 337.139 469.619 337.139ZM469.619 336.045C470.362 336.045 470.938 335.687 471.349 334.972C471.76 334.256 471.966 333.235 471.966 331.909C471.966 331.027 471.871 330.277 471.682 329.657C471.497 329.037 471.228 328.565 470.877 328.24C470.529 327.915 470.11 327.753 469.619 327.753C468.883 327.753 468.308 328.116 467.894 328.842C467.48 329.564 467.273 330.587 467.273 331.909C467.273 332.791 467.365 333.54 467.551 334.156C467.737 334.773 468.003 335.242 468.351 335.563C468.703 335.885 469.125 336.045 469.619 336.045Z" fill="black"/>
                <path d="M180.315 337.139C179.633 337.139 179.029 337.018 178.506 336.776C177.985 336.531 177.579 336.195 177.288 335.767C176.996 335.336 176.852 334.846 176.855 334.295C176.852 333.865 176.936 333.467 177.109 333.102C177.281 332.734 177.516 332.428 177.815 332.183C178.116 331.934 178.453 331.777 178.824 331.71V331.651C178.337 331.525 177.949 331.251 177.661 330.83C177.372 330.406 177.23 329.924 177.233 329.384C177.23 328.866 177.361 328.404 177.626 327.996C177.891 327.589 178.255 327.267 178.719 327.032C179.187 326.797 179.719 326.679 180.315 326.679C180.905 326.679 181.432 326.797 181.896 327.032C182.36 327.267 182.725 327.589 182.99 327.996C183.259 328.404 183.394 328.866 183.398 329.384C183.394 329.924 183.247 330.406 182.955 330.83C182.667 331.251 182.284 331.525 181.807 331.651V331.71C182.175 331.777 182.506 331.934 182.801 332.183C183.096 332.428 183.331 332.734 183.507 333.102C183.683 333.467 183.772 333.865 183.776 334.295C183.772 334.846 183.623 335.336 183.328 335.767C183.036 336.195 182.63 336.531 182.11 336.776C181.593 337.018 180.995 337.139 180.315 337.139ZM180.315 336.045C180.776 336.045 181.174 335.971 181.509 335.822C181.843 335.673 182.102 335.462 182.284 335.19C182.466 334.919 182.559 334.6 182.562 334.236C182.559 333.851 182.46 333.512 182.264 333.217C182.069 332.922 181.802 332.69 181.464 332.521C181.129 332.352 180.746 332.267 180.315 332.267C179.881 332.267 179.493 332.352 179.152 332.521C178.814 332.69 178.547 332.922 178.352 333.217C178.159 333.512 178.065 333.851 178.068 334.236C178.065 334.6 178.153 334.919 178.332 335.19C178.514 335.462 178.774 335.673 179.112 335.822C179.45 335.971 179.851 336.045 180.315 336.045ZM180.315 331.213C180.68 331.213 181.003 331.14 181.285 330.994C181.57 330.848 181.794 330.645 181.956 330.383C182.118 330.121 182.201 329.814 182.205 329.463C182.201 329.118 182.12 328.818 181.961 328.563C181.802 328.305 181.581 328.106 181.3 327.967C181.018 327.824 180.69 327.753 180.315 327.753C179.934 327.753 179.601 327.824 179.316 327.967C179.031 328.106 178.811 328.305 178.655 328.563C178.499 328.818 178.423 329.118 178.426 329.463C178.423 329.814 178.501 330.121 178.66 330.383C178.822 330.645 179.046 330.848 179.331 330.994C179.616 331.14 179.944 331.213 180.315 331.213ZM189.002 337.139C188.253 337.139 187.615 336.935 187.088 336.528C186.561 336.117 186.158 335.522 185.88 334.743C185.601 333.961 185.462 333.016 185.462 331.909C185.462 330.809 185.601 329.869 185.88 329.09C186.162 328.308 186.566 327.711 187.093 327.3C187.623 326.886 188.26 326.679 189.002 326.679C189.744 326.679 190.379 326.886 190.906 327.3C191.436 327.711 191.841 328.308 192.119 329.09C192.401 329.869 192.542 330.809 192.542 331.909C192.542 333.016 192.403 333.961 192.124 334.743C191.846 335.522 191.443 336.117 190.916 336.528C190.389 336.935 189.751 337.139 189.002 337.139ZM189.002 336.045C189.744 336.045 190.321 335.687 190.732 334.972C191.143 334.256 191.349 333.235 191.349 331.909C191.349 331.027 191.254 330.277 191.065 329.657C190.88 329.037 190.611 328.565 190.26 328.24C189.912 327.915 189.492 327.753 189.002 327.753C188.266 327.753 187.691 328.116 187.277 328.842C186.863 329.564 186.655 330.587 186.655 331.909C186.655 332.791 186.748 333.54 186.934 334.156C187.119 334.773 187.386 335.242 187.734 335.563C188.086 335.885 188.508 336.045 189.002 336.045Z" fill="black"/>
                <path d="M40.8153 334.912V333.898L45.2898 326.818H46.0256V328.389H45.5284L42.1477 333.739V333.818H48.1733V334.912H40.8153ZM45.608 337V334.604V334.131V326.818H46.7812V337H45.608ZM53.3574 337.139C52.6084 337.139 51.9703 336.935 51.4434 336.528C50.9164 336.117 50.5137 335.522 50.2353 334.743C49.9569 333.961 49.8176 333.016 49.8176 331.909C49.8176 330.809 49.9569 329.869 50.2353 329.09C50.517 328.308 50.9213 327.711 51.4483 327.3C51.9786 326.886 52.615 326.679 53.3574 326.679C54.0998 326.679 54.7346 326.886 55.2615 327.3C55.7918 327.711 56.1962 328.308 56.4746 329.09C56.7563 329.869 56.8972 330.809 56.8972 331.909C56.8972 333.016 56.758 333.961 56.4796 334.743C56.2012 335.522 55.7985 336.117 55.2715 336.528C54.7445 336.935 54.1065 337.139 53.3574 337.139ZM53.3574 336.045C54.0998 336.045 54.6766 335.687 55.0875 334.972C55.4985 334.256 55.704 333.235 55.704 331.909C55.704 331.027 55.6096 330.277 55.4206 329.657C55.235 329.037 54.9666 328.565 54.6152 328.24C54.2672 327.915 53.848 327.753 53.3574 327.753C52.6216 327.753 52.0466 328.116 51.6323 328.842C51.218 329.564 51.0108 330.587 51.0108 331.909C51.0108 332.791 51.1036 333.54 51.2892 334.156C51.4748 334.773 51.7417 335.242 52.0897 335.563C52.441 335.885 52.8636 336.045 53.3574 336.045Z" fill="black"/>
                <path d="M21.6335 310.818V321H20.4006V312.111H20.3409L17.8551 313.761V312.509L20.4006 310.818H21.6335ZM27.7436 321.139C27.1603 321.139 26.6349 321.023 26.1676 320.791C25.7003 320.559 25.3258 320.241 25.044 319.837C24.7623 319.432 24.6082 318.972 24.5817 318.455H25.7749C25.8213 318.915 26.0301 319.296 26.4013 319.598C26.7758 319.896 27.2232 320.045 27.7436 320.045C28.1612 320.045 28.5324 319.948 28.8572 319.752C29.1854 319.557 29.4422 319.288 29.6278 318.947C29.8168 318.602 29.9112 318.213 29.9112 317.778C29.9112 317.334 29.8134 316.938 29.6179 316.59C29.4257 316.239 29.1605 315.962 28.8224 315.76C28.4844 315.558 28.0982 315.455 27.6641 315.452C27.3525 315.448 27.0327 315.496 26.7045 315.596C26.3764 315.692 26.1063 315.816 25.8942 315.969L24.7408 315.83L25.3572 310.818H30.647V311.912H26.3913L26.0334 314.915H26.093C26.3018 314.749 26.5637 314.612 26.8786 314.502C27.1934 314.393 27.5215 314.338 27.8629 314.338C28.486 314.338 29.0412 314.487 29.5284 314.786C30.0189 315.08 30.4034 315.485 30.6818 315.999C30.9635 316.512 31.1044 317.099 31.1044 317.759C31.1044 318.408 30.9586 318.988 30.6669 319.499C30.3786 320.006 29.9808 320.407 29.4737 320.702C28.9666 320.993 28.3899 321.139 27.7436 321.139ZM36.2612 321.139C35.6779 321.139 35.1525 321.023 34.6852 320.791C34.2179 320.559 33.8433 320.241 33.5616 319.837C33.2799 319.432 33.1258 318.972 33.0993 318.455H34.2924C34.3388 318.915 34.5476 319.296 34.9189 319.598C35.2934 319.896 35.7408 320.045 36.2612 320.045C36.6788 320.045 37.05 319.948 37.3748 319.752C37.7029 319.557 37.9598 319.288 38.1454 318.947C38.3343 318.602 38.4288 318.213 38.4288 317.778C38.4288 317.334 38.331 316.938 38.1355 316.59C37.9432 316.239 37.6781 315.962 37.34 315.76C37.002 315.558 36.6158 315.455 36.1816 315.452C35.8701 315.448 35.5502 315.496 35.2221 315.596C34.894 315.692 34.6239 315.816 34.4118 315.969L33.2583 315.83L33.8748 310.818H39.1646V311.912H34.9089L34.551 314.915H34.6106C34.8194 314.749 35.0813 314.612 35.3961 314.502C35.711 314.393 36.0391 314.338 36.3805 314.338C37.0036 314.338 37.5588 314.487 38.046 314.786C38.5365 315.08 38.921 315.485 39.1994 315.999C39.4811 316.512 39.622 317.099 39.622 317.759C39.622 318.408 39.4761 318.988 39.1845 319.499C38.8961 320.006 38.4984 320.407 37.9913 320.702C37.4842 320.993 36.9075 321.139 36.2612 321.139Z" fill="black"/>
                <path d="M21.6335 253.818V264H20.4006V255.111H20.3409L17.8551 256.761V255.509L20.4006 253.818H21.6335ZM27.9425 264.139C27.5249 264.133 27.1072 264.053 26.6896 263.901C26.272 263.748 25.8909 263.491 25.5462 263.13C25.2015 262.765 24.9247 262.273 24.7159 261.653C24.5071 261.03 24.4027 260.248 24.4027 259.307C24.4027 258.405 24.4872 257.607 24.6562 256.911C24.8253 256.211 25.0705 255.623 25.392 255.146C25.7135 254.665 26.1013 254.3 26.5554 254.052C27.0128 253.803 27.5282 253.679 28.1016 253.679C28.6716 253.679 29.1787 253.793 29.6229 254.022C30.0703 254.247 30.4349 254.562 30.7166 254.967C30.9983 255.371 31.1806 255.837 31.2635 256.364H30.0504C29.9377 255.906 29.719 255.527 29.3942 255.225C29.0694 254.924 28.6385 254.773 28.1016 254.773C27.3127 254.773 26.6913 255.116 26.2372 255.802C25.7865 256.488 25.5594 257.451 25.5561 258.69H25.6357C25.8213 258.409 26.0417 258.168 26.2969 257.969C26.5554 257.767 26.8404 257.612 27.152 257.502C27.4635 257.393 27.7933 257.338 28.1413 257.338C28.7247 257.338 29.2583 257.484 29.7422 257.776C30.2261 258.064 30.6139 258.463 30.9055 258.974C31.1972 259.481 31.343 260.062 31.343 260.719C31.343 261.348 31.2022 261.925 30.9205 262.449C30.6387 262.969 30.2427 263.384 29.7322 263.692C29.2251 263.997 28.6286 264.146 27.9425 264.139ZM27.9425 263.045C28.3601 263.045 28.7346 262.941 29.0661 262.732C29.4008 262.523 29.6643 262.243 29.8565 261.892C30.0521 261.541 30.1499 261.15 30.1499 260.719C30.1499 260.298 30.0554 259.915 29.8665 259.57C29.6809 259.222 29.424 258.946 29.0959 258.74C28.7711 258.535 28.3999 258.432 27.9822 258.432C27.6674 258.432 27.3741 258.495 27.1023 258.621C26.8305 258.743 26.5919 258.912 26.3864 259.128C26.1842 259.343 26.0251 259.59 25.9091 259.869C25.7931 260.144 25.7351 260.434 25.7351 260.739C25.7351 261.143 25.8295 261.521 26.0185 261.872C26.2107 262.223 26.4725 262.507 26.804 262.722C27.1387 262.938 27.5182 263.045 27.9425 263.045ZM36.6191 264.139C35.8701 264.139 35.2321 263.935 34.7051 263.528C34.1781 263.117 33.7754 262.522 33.497 261.743C33.2186 260.961 33.0794 260.016 33.0794 258.909C33.0794 257.809 33.2186 256.869 33.497 256.09C33.7787 255.308 34.1831 254.711 34.71 254.3C35.2404 253.886 35.8767 253.679 36.6191 253.679C37.3616 253.679 37.9963 253.886 38.5233 254.3C39.0536 254.711 39.4579 255.308 39.7363 256.09C40.0181 256.869 40.1589 257.809 40.1589 258.909C40.1589 260.016 40.0197 260.961 39.7413 261.743C39.4629 262.522 39.0602 263.117 38.5332 263.528C38.0062 263.935 37.3682 264.139 36.6191 264.139ZM36.6191 263.045C37.3616 263.045 37.9383 262.687 38.3493 261.972C38.7602 261.256 38.9657 260.235 38.9657 258.909C38.9657 258.027 38.8713 257.277 38.6824 256.657C38.4967 256.037 38.2283 255.565 37.877 255.24C37.5289 254.915 37.1097 254.753 36.6191 254.753C35.8833 254.753 35.3083 255.116 34.894 255.842C34.4797 256.564 34.2725 257.587 34.2725 258.909C34.2725 259.791 34.3654 260.54 34.551 261.156C34.7366 261.773 35.0034 262.242 35.3514 262.563C35.7027 262.885 36.1253 263.045 36.6191 263.045Z" fill="black"/>
                <path d="M21.6335 190.818V201H20.4006V192.111H20.3409L17.8551 193.761V192.509L20.4006 190.818H21.6335ZM27.9425 201.139C27.5249 201.133 27.1072 201.053 26.6896 200.901C26.272 200.748 25.8909 200.491 25.5462 200.13C25.2015 199.765 24.9247 199.273 24.7159 198.653C24.5071 198.03 24.4027 197.248 24.4027 196.307C24.4027 195.405 24.4872 194.607 24.6562 193.911C24.8253 193.211 25.0705 192.623 25.392 192.146C25.7135 191.665 26.1013 191.3 26.5554 191.052C27.0128 190.803 27.5282 190.679 28.1016 190.679C28.6716 190.679 29.1787 190.793 29.6229 191.022C30.0703 191.247 30.4349 191.562 30.7166 191.967C30.9983 192.371 31.1806 192.837 31.2635 193.364H30.0504C29.9377 192.906 29.719 192.527 29.3942 192.225C29.0694 191.924 28.6385 191.773 28.1016 191.773C27.3127 191.773 26.6913 192.116 26.2372 192.802C25.7865 193.488 25.5594 194.451 25.5561 195.69H25.6357C25.8213 195.409 26.0417 195.168 26.2969 194.969C26.5554 194.767 26.8404 194.612 27.152 194.502C27.4635 194.393 27.7933 194.338 28.1413 194.338C28.7247 194.338 29.2583 194.484 29.7422 194.776C30.2261 195.064 30.6139 195.463 30.9055 195.974C31.1972 196.481 31.343 197.062 31.343 197.719C31.343 198.348 31.2022 198.925 30.9205 199.449C30.6387 199.969 30.2427 200.384 29.7322 200.692C29.2251 200.997 28.6286 201.146 27.9425 201.139ZM27.9425 200.045C28.3601 200.045 28.7346 199.941 29.0661 199.732C29.4008 199.523 29.6643 199.243 29.8565 198.892C30.0521 198.541 30.1499 198.15 30.1499 197.719C30.1499 197.298 30.0554 196.915 29.8665 196.57C29.6809 196.222 29.424 195.946 29.0959 195.74C28.7711 195.535 28.3999 195.432 27.9822 195.432C27.6674 195.432 27.3741 195.495 27.1023 195.621C26.8305 195.743 26.5919 195.912 26.3864 196.128C26.1842 196.343 26.0251 196.59 25.9091 196.869C25.7931 197.144 25.7351 197.434 25.7351 197.739C25.7351 198.143 25.8295 198.521 26.0185 198.872C26.2107 199.223 26.4725 199.507 26.804 199.722C27.1387 199.938 27.5182 200.045 27.9425 200.045ZM36.4799 201.139C35.8966 201.139 35.3713 201.023 34.9039 200.791C34.4366 200.559 34.0621 200.241 33.7804 199.837C33.4986 199.432 33.3445 198.972 33.318 198.455H34.5112C34.5576 198.915 34.7664 199.296 35.1376 199.598C35.5121 199.896 35.9596 200.045 36.4799 200.045C36.8975 200.045 37.2688 199.948 37.5936 199.752C37.9217 199.557 38.1786 199.288 38.3642 198.947C38.5531 198.602 38.6475 198.213 38.6475 197.778C38.6475 197.334 38.5498 196.938 38.3542 196.59C38.162 196.239 37.8968 195.962 37.5588 195.76C37.2207 195.558 36.8346 195.455 36.4004 195.452C36.0888 195.448 35.769 195.496 35.4409 195.596C35.1127 195.692 34.8426 195.816 34.6305 195.969L33.4771 195.83L34.0936 190.818H39.3833V191.912H35.1277L34.7697 194.915H34.8294C35.0382 194.749 35.3 194.612 35.6149 194.502C35.9297 194.393 36.2579 194.338 36.5993 194.338C37.2224 194.338 37.7775 194.487 38.2647 194.786C38.7553 195.08 39.1397 195.485 39.4181 195.999C39.6999 196.512 39.8407 197.099 39.8407 197.759C39.8407 198.408 39.6949 198.988 39.4032 199.499C39.1149 200.006 38.7172 200.407 38.21 200.702C37.7029 200.993 37.1262 201.139 36.4799 201.139Z" fill="black"/>
                <path d="M21.6335 126.818V137H20.4006V128.111H20.3409L17.8551 129.761V128.509L20.4006 126.818H21.6335ZM24.88 137L29.4339 127.991V127.912H24.1839V126.818H30.7067V127.972L26.1726 137H24.88ZM35.6621 137.139C34.9131 137.139 34.275 136.935 33.748 136.528C33.2211 136.117 32.8184 135.522 32.54 134.743C32.2615 133.961 32.1223 133.016 32.1223 131.909C32.1223 130.809 32.2615 129.869 32.54 129.09C32.8217 128.308 33.226 127.711 33.753 127.3C34.2833 126.886 34.9197 126.679 35.6621 126.679C36.4045 126.679 37.0392 126.886 37.5662 127.3C38.0965 127.711 38.5009 128.308 38.7793 129.09C39.061 129.869 39.2019 130.809 39.2019 131.909C39.2019 133.016 39.0627 133.961 38.7843 134.743C38.5059 135.522 38.1032 136.117 37.5762 136.528C37.0492 136.935 36.4112 137.139 35.6621 137.139ZM35.6621 136.045C36.4045 136.045 36.9812 135.687 37.3922 134.972C37.8032 134.256 38.0087 133.235 38.0087 131.909C38.0087 131.027 37.9142 130.277 37.7253 129.657C37.5397 129.037 37.2712 128.565 36.9199 128.24C36.5719 127.915 36.1526 127.753 35.6621 127.753C34.9263 127.753 34.3513 128.116 33.937 128.842C33.5227 129.564 33.3155 130.587 33.3155 131.909C33.3155 132.791 33.4083 133.54 33.5939 134.156C33.7795 134.773 34.0463 135.242 34.3944 135.563C34.7457 135.885 35.1683 136.045 35.6621 136.045Z" fill="black"/>
                <path d="M23.6335 66.8182V77H22.4006V68.1108H22.3409L19.8551 69.7614V68.5085L22.4006 66.8182H23.6335ZM26.88 77L31.4339 67.9915V67.9119H26.1839V66.8182H32.7067V67.9716L28.1726 77H26.88ZM37.6049 77.1392C37.0216 77.1392 36.4963 77.0232 36.0289 76.7912C35.5616 76.5592 35.1871 76.241 34.9054 75.8366C34.6236 75.4323 34.4695 74.9716 34.443 74.4545H35.6362C35.6826 74.9152 35.8914 75.2964 36.2626 75.598C36.6371 75.8963 37.0846 76.0455 37.6049 76.0455C38.0225 76.0455 38.3938 75.9477 38.7186 75.7521C39.0467 75.5566 39.3036 75.2881 39.4892 74.9467C39.6781 74.602 39.7725 74.2126 39.7725 73.7784C39.7725 73.3343 39.6748 72.9382 39.4792 72.5902C39.287 72.2389 39.0218 71.9621 38.6838 71.7599C38.3457 71.5578 37.9596 71.455 37.5254 71.4517C37.2138 71.4484 36.894 71.4964 36.5659 71.5959C36.2377 71.692 35.9676 71.8163 35.7555 71.9688L34.6021 71.8295L35.2186 66.8182H40.5083V67.9119H36.2527L35.8947 70.9148H35.9544C36.1632 70.7491 36.425 70.6115 36.7399 70.5021C37.0547 70.3928 37.3829 70.3381 37.7243 70.3381C38.3474 70.3381 38.9025 70.4872 39.3897 70.7855C39.8803 71.0805 40.2647 71.4848 40.5431 71.9986C40.8249 72.5123 40.9657 73.099 40.9657 73.7585C40.9657 74.4081 40.8199 74.9882 40.5282 75.4986C40.2399 76.0057 39.8422 76.4067 39.335 76.7017C38.8279 76.9934 38.2512 77.1392 37.6049 77.1392Z" fill="black"/>
                <path d="M111.435 337.139C111.017 337.133 110.599 337.053 110.182 336.901C109.764 336.748 109.383 336.491 109.038 336.13C108.694 335.765 108.417 335.273 108.208 334.653C107.999 334.03 107.895 333.248 107.895 332.307C107.895 331.405 107.979 330.607 108.148 329.911C108.317 329.211 108.563 328.623 108.884 328.146C109.206 327.665 109.594 327.3 110.048 327.052C110.505 326.803 111.02 326.679 111.594 326.679C112.164 326.679 112.671 326.793 113.115 327.022C113.563 327.247 113.927 327.562 114.209 327.967C114.491 328.371 114.673 328.837 114.756 329.364H113.543C113.43 328.906 113.211 328.527 112.886 328.225C112.562 327.924 112.131 327.773 111.594 327.773C110.805 327.773 110.183 328.116 109.729 328.802C109.279 329.488 109.052 330.451 109.048 331.69H109.128C109.313 331.409 109.534 331.168 109.789 330.969C110.048 330.767 110.333 330.612 110.644 330.502C110.956 330.393 111.286 330.338 111.634 330.338C112.217 330.338 112.75 330.484 113.234 330.776C113.718 331.064 114.106 331.463 114.398 331.974C114.689 332.481 114.835 333.062 114.835 333.719C114.835 334.348 114.694 334.925 114.413 335.449C114.131 335.969 113.735 336.384 113.224 336.692C112.717 336.997 112.121 337.146 111.435 337.139ZM111.435 336.045C111.852 336.045 112.227 335.941 112.558 335.732C112.893 335.523 113.156 335.243 113.349 334.892C113.544 334.541 113.642 334.15 113.642 333.719C113.642 333.298 113.548 332.915 113.359 332.57C113.173 332.222 112.916 331.946 112.588 331.74C112.263 331.535 111.892 331.432 111.474 331.432C111.16 331.432 110.866 331.495 110.594 331.621C110.323 331.743 110.084 331.912 109.879 332.128C109.676 332.343 109.517 332.59 109.401 332.869C109.285 333.144 109.227 333.434 109.227 333.739C109.227 334.143 109.322 334.521 109.511 334.872C109.703 335.223 109.965 335.507 110.296 335.722C110.631 335.938 111.01 336.045 111.435 336.045ZM120.111 337.139C119.362 337.139 118.724 336.935 118.197 336.528C117.67 336.117 117.268 335.522 116.989 334.743C116.711 333.961 116.572 333.016 116.572 331.909C116.572 330.809 116.711 329.869 116.989 329.09C117.271 328.308 117.675 327.711 118.202 327.3C118.733 326.886 119.369 326.679 120.111 326.679C120.854 326.679 121.488 326.886 122.015 327.3C122.546 327.711 122.95 328.308 123.229 329.09C123.51 329.869 123.651 330.809 123.651 331.909C123.651 333.016 123.512 333.961 123.233 334.743C122.955 335.522 122.552 336.117 122.025 336.528C121.498 336.935 120.86 337.139 120.111 337.139ZM120.111 336.045C120.854 336.045 121.43 335.687 121.841 334.972C122.252 334.256 122.458 333.235 122.458 331.909C122.458 331.027 122.363 330.277 122.175 329.657C121.989 329.037 121.72 328.565 121.369 328.24C121.021 327.915 120.602 327.753 120.111 327.753C119.376 327.753 118.8 328.116 118.386 328.842C117.972 329.564 117.765 330.587 117.765 331.909C117.765 332.791 117.858 333.54 118.043 334.156C118.229 334.773 118.496 335.242 118.844 335.563C119.195 335.885 119.617 336.045 120.111 336.045Z" fill="black"/>
                <path d="M248.634 326.818V337H247.401V328.111H247.341L244.855 329.761V328.509L247.401 326.818H248.634ZM254.883 337.139C254.134 337.139 253.496 336.935 252.969 336.528C252.442 336.117 252.039 335.522 251.761 334.743C251.482 333.961 251.343 333.016 251.343 331.909C251.343 330.809 251.482 329.869 251.761 329.09C252.042 328.308 252.447 327.711 252.974 327.3C253.504 326.886 254.14 326.679 254.883 326.679C255.625 326.679 256.26 326.886 256.787 327.3C257.317 327.711 257.722 328.308 258 329.09C258.282 329.869 258.423 330.809 258.423 331.909C258.423 333.016 258.283 333.961 258.005 334.743C257.727 335.522 257.324 336.117 256.797 336.528C256.27 336.935 255.632 337.139 254.883 337.139ZM254.883 336.045C255.625 336.045 256.202 335.687 256.613 334.972C257.024 334.256 257.229 333.235 257.229 331.909C257.229 331.027 257.135 330.277 256.946 329.657C256.76 329.037 256.492 328.565 256.141 328.24C255.793 327.915 255.373 327.753 254.883 327.753C254.147 327.753 253.572 328.116 253.158 328.842C252.743 329.564 252.536 330.587 252.536 331.909C252.536 332.791 252.629 333.54 252.815 334.156C253 334.773 253.267 335.242 253.615 335.563C253.966 335.885 254.389 336.045 254.883 336.045ZM263.633 337.139C262.884 337.139 262.246 336.935 261.719 336.528C261.192 336.117 260.789 335.522 260.511 334.743C260.232 333.961 260.093 333.016 260.093 331.909C260.093 330.809 260.232 329.869 260.511 329.09C260.792 328.308 261.197 327.711 261.724 327.3C262.254 326.886 262.89 326.679 263.633 326.679C264.375 326.679 265.01 326.886 265.537 327.3C266.067 327.711 266.472 328.308 266.75 329.09C267.032 329.869 267.173 330.809 267.173 331.909C267.173 333.016 267.033 333.961 266.755 334.743C266.477 335.522 266.074 336.117 265.547 336.528C265.02 336.935 264.382 337.139 263.633 337.139ZM263.633 336.045C264.375 336.045 264.952 335.687 265.363 334.972C265.774 334.256 265.979 333.235 265.979 331.909C265.979 331.027 265.885 330.277 265.696 329.657C265.51 329.037 265.242 328.565 264.891 328.24C264.543 327.915 264.123 327.753 263.633 327.753C262.897 327.753 262.322 328.116 261.908 328.842C261.493 329.564 261.286 330.587 261.286 331.909C261.286 332.791 261.379 333.54 261.565 334.156C261.75 334.773 262.017 335.242 262.365 335.563C262.716 335.885 263.139 336.045 263.633 336.045Z" fill="black"/>
                <path d="M387.634 326.818V337H386.401V328.111H386.341L383.855 329.761V328.509L386.401 326.818H387.634ZM390.323 334.912V333.898L394.798 326.818H395.533V328.389H395.036L391.656 333.739V333.818H397.681V334.912H390.323ZM395.116 337V334.604V334.131V326.818H396.289V337H395.116ZM402.865 337.139C402.116 337.139 401.478 336.935 400.951 336.528C400.424 336.117 400.021 335.522 399.743 334.743C399.465 333.961 399.325 333.016 399.325 331.909C399.325 330.809 399.465 329.869 399.743 329.09C400.025 328.308 400.429 327.711 400.956 327.3C401.486 326.886 402.123 326.679 402.865 326.679C403.608 326.679 404.242 326.886 404.769 327.3C405.3 327.711 405.704 328.308 405.982 329.09C406.264 329.869 406.405 330.809 406.405 331.909C406.405 333.016 406.266 333.961 405.987 334.743C405.709 335.522 405.306 336.117 404.779 336.528C404.252 336.935 403.614 337.139 402.865 337.139ZM402.865 336.045C403.608 336.045 404.184 335.687 404.595 334.972C405.006 334.256 405.212 333.235 405.212 331.909C405.212 331.027 405.117 330.277 404.928 329.657C404.743 329.037 404.474 328.565 404.123 328.24C403.775 327.915 403.356 327.753 402.865 327.753C402.129 327.753 401.554 328.116 401.14 328.842C400.726 329.564 400.519 330.587 400.519 331.909C400.519 332.791 400.611 333.54 400.797 334.156C400.983 334.773 401.249 335.242 401.597 335.563C401.949 335.885 402.371 336.045 402.865 336.045Z" fill="black"/>
                <path d="M316.634 326.818V337H315.401V328.111H315.341L312.855 329.761V328.509L315.401 326.818H316.634ZM319.562 337V336.105L322.923 332.426C323.317 331.995 323.642 331.621 323.897 331.303C324.152 330.981 324.341 330.679 324.464 330.398C324.59 330.113 324.653 329.814 324.653 329.503C324.653 329.145 324.567 328.835 324.394 328.573C324.225 328.311 323.993 328.109 323.698 327.967C323.403 327.824 323.072 327.753 322.704 327.753C322.313 327.753 321.971 327.834 321.68 327.996C321.391 328.156 321.168 328.379 321.009 328.668C320.853 328.956 320.775 329.294 320.775 329.682H319.602C319.602 329.085 319.739 328.562 320.014 328.111C320.289 327.66 320.664 327.309 321.138 327.057C321.615 326.805 322.15 326.679 322.744 326.679C323.34 326.679 323.869 326.805 324.33 327.057C324.79 327.309 325.152 327.648 325.413 328.076C325.675 328.504 325.806 328.979 325.806 329.503C325.806 329.877 325.738 330.244 325.602 330.602C325.47 330.956 325.238 331.352 324.906 331.79C324.578 332.224 324.122 332.754 323.539 333.381L321.252 335.827V335.906H325.985V337H319.562ZM331.359 337.139C330.61 337.139 329.972 336.935 329.445 336.528C328.918 336.117 328.516 335.522 328.237 334.743C327.959 333.961 327.82 333.016 327.82 331.909C327.82 330.809 327.959 329.869 328.237 329.09C328.519 328.308 328.923 327.711 329.45 327.3C329.981 326.886 330.617 326.679 331.359 326.679C332.102 326.679 332.737 326.886 333.263 327.3C333.794 327.711 334.198 328.308 334.477 329.09C334.758 329.869 334.899 330.809 334.899 331.909C334.899 333.016 334.76 333.961 334.482 334.743C334.203 335.522 333.8 336.117 333.273 336.528C332.746 336.935 332.108 337.139 331.359 337.139ZM331.359 336.045C332.102 336.045 332.679 335.687 333.089 334.972C333.5 334.256 333.706 333.235 333.706 331.909C333.706 331.027 333.612 330.277 333.423 329.657C333.237 329.037 332.969 328.565 332.617 328.24C332.269 327.915 331.85 327.753 331.359 327.753C330.624 327.753 330.049 328.116 329.634 328.842C329.22 329.564 329.013 330.587 329.013 331.909C329.013 332.791 329.106 333.54 329.291 334.156C329.477 334.773 329.744 335.242 330.092 335.563C330.443 335.885 330.866 336.045 331.359 336.045Z" fill="black"/>
                <line x1="252.5" y1="310.001" x2="252.5" y2="9.0011" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <line x1="322" y1="308" x2="322" y2="7" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <line x1="391" y1="309" x2="391" y2="8" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M460 317V310" stroke="black" strokeWidth="2"/>
                <line x1="460" y1="309" x2="460" y2="8" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M52.9988 133H462" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <line x1="52" y1="72" x2="461.001" y2="72" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <line x1="53" y1="196" x2="462.001" y2="196" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <line x1="53" y1="258" x2="462.001" y2="258" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <line x1="114" y1="310" x2="114" y2="9" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <line x1="183.509" y1="310.001" x2="183.509" y2="9.0011" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M391 317V310" stroke="black" strokeWidth="2"/>
                <path d="M184 317V310" stroke="black" strokeWidth="2"/>
                <path d="M253 317V310" stroke="black" strokeWidth="2"/>
                <path d="M322 317V310" stroke="black" strokeWidth="2"/>
                <line x1="46" y1="258" x2="53" y2="258" stroke="black" strokeWidth="2"/>
                <line x1="46" y1="196" x2="53" y2="196" stroke="black" strokeWidth="2"/>
                <line x1="45" y1="133" x2="52" y2="133" stroke="black" strokeWidth="2"/>
                <line x1="45" y1="72" x2="52" y2="72" stroke="black" strokeWidth="2"/>
                <line x1="114" y1="317" x2="114" y2="310" stroke="black" strokeWidth="2"/>
                <line x1="45" y1="317" x2="461" y2="317" stroke="black" strokeWidth="2"/>
                <line x1="44.5221" y1="316.996" x2="46.0048" y2="8.99521" stroke="black" strokeWidth="2"/>
                
                <path d="M78.8481 284.457C173.5 94 345.5 43 425 18.5" stroke="#AC08F0" strokeWidth="2" id="path3_3"/>
                
                <path d="M14 175.349V176.642L3.81818 172.903V171.631L14 167.892V169.185L5.42898 172.227V172.307L14 175.349ZM10.0227 174.872V169.662H11.1165V174.872H10.0227ZM14 161.195H15.0938L15.0938 167.559H14L14 161.195ZM10.8778 155.323H6.36364L6.36364 154.149H14V155.323H12.7074V155.402C13.0952 155.581 13.425 155.86 13.6967 156.237C13.9652 156.615 14.0994 157.093 14.0994 157.669C14.0994 158.146 13.995 158.571 13.7862 158.942C13.5741 159.313 13.2559 159.605 12.8317 159.817C12.4041 160.029 11.8655 160.135 11.2159 160.135H6.36364V158.962H11.1364C11.6932 158.962 12.1373 158.806 12.4688 158.494C12.8002 158.18 12.9659 157.779 12.9659 157.291C12.9659 157 12.8913 156.703 12.7422 156.401C12.593 156.097 12.3643 155.841 12.0561 155.636C11.7479 155.427 11.3551 155.323 10.8778 155.323Z" fill="black"/>
                <line x1="51" y1="8" x2="460.001" y2="8" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="2 2"/>
                <line x1="44" y1="8" x2="51" y2="8" stroke="black" strokeWidth="2"/>
                <line x1="75" y1="17.5" x2="100" y2="17.5" stroke="#AC08F0"/>
                <path d="M50.6506 23H49.358L53.0966 12.8182H54.3693L58.108 23H56.8153L53.7727 14.429H53.6932L50.6506 23ZM51.1278 19.0227H56.3381V20.1165H51.1278V19.0227ZM64.8047 23V24.0938H58.4411V23H64.8047ZM70.6774 19.8778V15.3636H71.8507V23H70.6774V21.7074H70.5978C70.4189 22.0952 70.1404 22.425 69.7626 22.6967C69.3848 22.9652 68.9075 23.0994 68.3308 23.0994C67.8535 23.0994 67.4293 22.995 67.0581 22.7862C66.6868 22.5741 66.3952 22.2559 66.1831 21.8317C65.9709 21.4041 65.8649 20.8655 65.8649 20.2159V15.3636H67.0382V20.1364C67.0382 20.6932 67.194 21.1373 67.5055 21.4688C67.8204 21.8002 68.2214 21.9659 68.7086 21.9659C69.0003 21.9659 69.2969 21.8913 69.5985 21.7422C69.9035 21.593 70.1587 21.3643 70.3642 21.0561C70.573 20.7479 70.6774 20.3551 70.6774 19.8778Z" fill="black"/>
                <path d="M23.6335 3.81818V14H22.4006V5.1108H22.3409L19.8551 6.76136V5.50852L22.4006 3.81818H23.6335ZM29.8232 14.1392C29.1404 14.1392 28.5372 14.0182 28.0135 13.7763C27.4931 13.531 27.0871 13.1946 26.7955 12.767C26.5038 12.3362 26.3596 11.8456 26.3629 11.2955C26.3596 10.8646 26.4441 10.4669 26.6165 10.1023C26.7888 9.73437 27.0241 9.42779 27.3224 9.18253C27.6241 8.93395 27.9605 8.77651 28.3317 8.71023V8.65057C27.8445 8.52462 27.4567 8.25118 27.1683 7.83026C26.88 7.40601 26.7375 6.92377 26.7408 6.38352C26.7375 5.86648 26.8684 5.40412 27.1335 4.99645C27.3987 4.58878 27.7633 4.26728 28.2273 4.03196C28.6946 3.79664 29.2266 3.67898 29.8232 3.67898C30.4131 3.67898 30.9401 3.79664 31.4041 4.03196C31.8681 4.26728 32.2327 4.58878 32.4979 4.99645C32.7663 5.40412 32.9022 5.86648 32.9055 6.38352C32.9022 6.92377 32.7547 7.40601 32.4631 7.83026C32.1747 8.25118 31.7919 8.52462 31.3146 8.65057V8.71023C31.6825 8.77651 32.014 8.93395 32.3089 9.18253C32.6039 9.42779 32.8393 9.73437 33.0149 10.1023C33.1906 10.4669 33.2801 10.8646 33.2834 11.2955C33.2801 11.8456 33.1309 12.3362 32.8359 12.767C32.5443 13.1946 32.1383 13.531 31.6179 13.7763C31.1009 14.0182 30.5026 14.1392 29.8232 14.1392ZM29.8232 13.0455C30.2839 13.0455 30.6816 12.9709 31.0163 12.8217C31.3511 12.6726 31.6096 12.4621 31.7919 12.1903C31.9742 11.9186 32.067 11.6004 32.0703 11.2358C32.067 10.8513 31.9676 10.5116 31.772 10.2166C31.5765 9.92164 31.3097 9.68963 30.9716 9.5206C30.6368 9.35156 30.254 9.26705 29.8232 9.26705C29.389 9.26705 29.0012 9.35156 28.6598 9.5206C28.3217 9.68963 28.0549 9.92164 27.8594 10.2166C27.6671 10.5116 27.5727 10.8513 27.576 11.2358C27.5727 11.6004 27.6605 11.9186 27.8395 12.1903C28.0218 12.4621 28.282 12.6726 28.62 12.8217C28.9581 12.9709 29.3591 13.0455 29.8232 13.0455ZM29.8232 8.21307C30.1877 8.21307 30.5109 8.14015 30.7926 7.99432C31.0777 7.84848 31.3014 7.64465 31.4638 7.38281C31.6262 7.12098 31.709 6.81439 31.7124 6.46307C31.709 6.11837 31.6278 5.81842 31.4688 5.56321C31.3097 5.30469 31.0893 5.10582 30.8075 4.96662C30.5258 4.8241 30.1977 4.75284 29.8232 4.75284C29.442 4.75284 29.1089 4.8241 28.8239 4.96662C28.5388 5.10582 28.3184 5.30469 28.1626 5.56321C28.0069 5.81842 27.9306 6.11837 27.9339 6.46307C27.9306 6.81439 28.0085 7.12098 28.1676 7.38281C28.33 7.64465 28.5537 7.84848 28.8388 7.99432C29.1238 8.14015 29.4519 8.21307 29.8232 8.21307ZM38.5098 14.1392C37.7607 14.1392 37.1227 13.9354 36.5957 13.5277C36.0687 13.1167 35.666 12.5218 35.3876 11.7429C35.1092 10.9607 34.97 10.0161 34.97 8.90909C34.97 7.80871 35.1092 6.86908 35.3876 6.0902C35.6693 5.308 36.0737 4.71141 36.6007 4.30043C37.131 3.88613 37.7673 3.67898 38.5098 3.67898C39.2522 3.67898 39.8869 3.88613 40.4139 4.30043C40.9442 4.71141 41.3485 5.308 41.627 6.0902C41.9087 6.86908 42.0495 7.80871 42.0495 8.90909C42.0495 10.0161 41.9103 10.9607 41.6319 11.7429C41.3535 12.5218 40.9508 13.1167 40.4238 13.5277C39.8968 13.9354 39.2588 14.1392 38.5098 14.1392ZM38.5098 13.0455C39.2522 13.0455 39.8289 12.6875 40.2399 11.9716C40.6509 11.2557 40.8564 10.2348 40.8564 8.90909C40.8564 8.02746 40.7619 7.27675 40.573 6.65696C40.3874 6.03717 40.1189 5.56487 39.7676 5.24006C39.4196 4.91525 39.0003 4.75284 38.5098 4.75284C37.774 4.75284 37.1989 5.11577 36.7846 5.84162C36.3703 6.56416 36.1632 7.58665 36.1632 8.90909C36.1632 9.79072 36.256 10.5398 36.4416 11.1562C36.6272 11.7727 36.894 12.2417 37.242 12.5632C37.5933 12.8847 38.0159 13.0455 38.5098 13.0455Z" fill="black"/>
            </svg>



        <div> <button onClick={LoadPath}>Zobraz / Skryť</button></div>
    

        </>
    );

}
export default Example_3_4;