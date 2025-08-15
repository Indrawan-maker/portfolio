"use client";

import React, {
    Children,
    cloneElement,
    useRef,
    useState,
} from "react";

export type DockItemData = {
    icon: React.ReactNode;
    label: React.ReactNode;
    onClick: () => void;
    className?: string;
};

export type DockProps = {
    items: DockItemData[];
    className?: string;
    panelHeight?: number;
    baseItemSize?: number;
};

type DockItemProps = {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    baseItemSize: number;
};

function DockItem({
    children,
    className = "",
    onClick,
    baseItemSize,
}: DockItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            ref={ref}
            style={{
                width: baseItemSize,
                height: baseItemSize,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            className={`relative inline-flex items-center justify-center rounded-full bg-[#060010] border-neutral-700 border-2 shadow-md ${className}`}
            tabIndex={0}
            role="button"
            aria-haspopup="true"
        >
            {Children.map(children, (child) => {
                if ((child as React.ReactElement).type === DockLabel) {
                    return cloneElement(child as React.ReactElement<DockLabelProps>, { isHovered });
                }
                return child;
            })}
        </div>
    );
}

type DockLabelProps = {
    className?: string;
    children: React.ReactNode;
    isHovered?: boolean;
};

function DockLabel({ children, className = "", isHovered }: DockLabelProps) {
    return (
        isHovered && (
            <div
                className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white`}
                role="tooltip"
                style={{ transform: "translateX(-50%)" }}
            >
                {children}
            </div>
        )
    );
}

type DockIconProps = {
    className?: string;
    children: React.ReactNode;
};

function DockIcon({ children, className = "" }: DockIconProps) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            {children}
        </div>
    );
}

export default function Dock({
    items,
    className = "",
    panelHeight = 64,
    baseItemSize = 50,
}: DockProps) {
    return (
        <div
            style={{ height: panelHeight, scrollbarWidth: "none" }}
            className="mx-2 flex max-w-full items-center"
        >
            <div
                className={`${className} absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl border-neutral-700 border-2 pb-2 px-4`}
                style={{ height: panelHeight }}
                role="toolbar"
                aria-label="Application dock"
            >
                {items.map((item, index) => (
                    <DockItem
                        key={index}
                        onClick={item.onClick}
                        className={item.className}
                        baseItemSize={baseItemSize}
                    >
                        <DockIcon>{item.icon}</DockIcon>
                        <DockLabel>{item.label}</DockLabel>
                    </DockItem>
                ))}
            </div>
        </div>
    );
}