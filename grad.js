var granimInstance = new Granim({
    element: '#canvasAnim',
    direction: 'diagonal', // 'diagonal', 'top-bottom', 'radial'
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff99cc', '#33ccff'],
                ['#FFDAB9', '#87CEFA'],
                ['#F08080', '#9370DB'],
                ['#B0C4DE', '#AB42B0'],
                ['#FFE4E1', '#E6E6FA'],
            ]
        }
    }
});