package de.f0rce.ace.util;

import java.io.Serializable;

import de.f0rce.ace.events.AceBlurChanged;
import de.f0rce.ace.events.AceForceSyncDomEvent;
import de.f0rce.ace.events.AceSelectionChanged;
import tools.jackson.databind.JsonNode;

/** @author David "F0rce" Dodlek */
public class AceSelection implements Serializable {

  private int startRow;
  private int startColumn;
  private int endRow;
  private int endColumn;
  private int startIndex;
  private int endIndex;
  private String selectedText;

  /** Default Constructor to have valid values on initializing. */
  public AceSelection() {
    this.startRow = 0;
    this.startColumn = 0;
    this.endRow = 0;
    this.endColumn = 0;
    this.startIndex = 0;
    this.endIndex = 0;
    this.selectedText = "";
  }

  /**
   * Constructor for initializing the values directly from the frontend (only used in {@link
   * AceBlurChanged}, {@link AceSelectionChanged}, {@link AceForceSyncDomEvent}).
   *
   * @param selectionObject {@link JsonNode}
   */
  public AceSelection(JsonNode selectionObject) {
    JsonNode startObject = selectionObject.get("start");
    this.startRow = (int) startObject.get("row").asInt();
    this.startColumn = (int) startObject.get("column").asInt();

    JsonNode endObject = selectionObject.get("end");
    this.endRow = (int) endObject.get("row").asInt();
    this.endColumn = (int) endObject.get("column").asInt();

    JsonNode indexObject = selectionObject.get("index");
    this.startIndex = (int) indexObject.get("start").asInt();
    this.endIndex = (int) indexObject.get("end").asInt();

    this.selectedText = selectionObject.get("selectedText").asString();
  }

  /**
   * Returns the row where the selection starts.
   *
   * @return int
   */
  public int getStartRow() {
    return this.startRow;
  }

  /**
   * Returns the column where the selection starts.
   *
   * @return int
   */
  public int getStartColumn() {
    return this.startColumn;
  }

  /**
   * Returns the index where the selection starts.
   *
   * @return int
   */
  public int getStartIndex() {
    return this.startIndex;
  }

  /**
   * Returns the row where the selection ends.
   *
   * @return int
   */
  public int getEndRow() {
    return this.endRow;
  }

  /**
   * Returns the column where the selection ends.
   *
   * @return int
   */
  public int getEndColumn() {
    return this.endColumn;
  }

  /**
   * Returns the index where the selections ends.
   *
   * @return int
   */
  public int getEndIndex() {
    return this.endIndex;
  }

  /**
   * Returns the text which is selected.
   *
   * @return {@link String}
   */
  public String getSelectedText() {
    return this.selectedText;
  }

  /**
   * Check if one instance of the {@link AceSelection} is equal to another.
   *
   * @param a {@link AceSelection}
   * @return boolean
   */
  public boolean compareTo(AceSelection a) {
    return a.getStartRow() == this.startRow
        && a.getStartColumn() == this.startColumn
        && a.getStartIndex() == this.startIndex
        && a.getEndRow() == this.endRow
        && a.getEndColumn() == this.endColumn
        && a.getEndIndex() == this.endIndex
        && a.getSelectedText().equals(this.selectedText);
  }
}
