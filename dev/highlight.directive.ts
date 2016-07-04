import {Directive, ElementRef, Renderer, HostListener} from 'angular2/core';

@Directive({
    selector: '[myHighlight]',
    inputs: ['highlightColor']
})

export class HighlightDirective {
    private _defaultColor: string = 'green';
    private el: HTMLElement;
    highlightColor: string;
    
    //@Input('myHighlight') highlightColor: string;
    
    constructor(private  _elRef: ElementRef, private _renderer: Renderer){
        this.el = this._elRef.nativeElement;
    }

    ngOnInit(): any{
        //this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
        this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
}