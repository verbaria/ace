package de.f0rce.ace.interfaces;

import java.io.Serializable;

/** @author David "F0rce" Dodlek */
public interface IAceWordCompleter extends Serializable {

    /**
     * Returns a JSON representation of a word completer.
     *
     * @return {@link String}
     */
    String toJSON();
}