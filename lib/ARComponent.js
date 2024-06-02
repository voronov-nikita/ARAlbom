import React, { useEffect } from "react";

const ARComponent = () => {
    useEffect(() => {
        // Загрузка A-Frame
        const script1 = document.createElement("script");
        script1.src = "https://aframe.io/releases/1.2.0/aframe.min.js";
        script1.onload = () => {
            // После загрузки A-Frame загружаем AR.js
            const script2 = document.createElement("script");
            script2.src =
                "https://rawgit.com/jeromeetienne/AR.js/2.1.1/aframe/build/aframe-ar.js";
            script2.onload = () => {
                // После загрузки AR.js инициализируем A-Frame
                AFRAME.registerComponent("markerhandler", {
                    init: function () {
                        this.el.sceneEl.addEventListener(
                            "markerFound",
                            (event) => {
                                console.log(
                                    "Маркер найден",
                                    event.detail.marker
                                );
                            }
                        );
                        this.el.sceneEl.addEventListener(
                            "markerLost",
                            (event) => {
                                console.log(
                                    "Маркер потерян",
                                    event.detail.marker
                                );
                            }
                        );
                    },
                });
            };
            document.body.appendChild(script2);
        };
        document.body.appendChild(script1);
    }, []);

    return (
        <a-scene embedded arjs="sourceType: webcam;">
            <a-marker preset="hiro">
                <a-box position="0 0.5 0" material="color: red;"></a-box>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    );
};

export default ARComponent;
